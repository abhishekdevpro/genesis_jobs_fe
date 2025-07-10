
import { useState, useRef, useEffect } from "react";

export default function InterviewPage() {
  const [screenStream, setScreenStream] = useState(null);
  const [transcripts, setTranscripts] = useState([]);
  const screenRef = useRef();
  const recorderRef = useRef();
  const chunksRef = useRef([]);
  const intervalRef = useRef();
  const wsRef = useRef(null);

  // WebSocket setup
  useEffect(() => {
    const ws = new WebSocket("wss://api.genesisliveai.com/api/user/ws/audio");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket connected");
    };

    ws.onerror = (err) => {
      console.error("❌ WebSocket error", err);
    };

    ws.onclose = () => {
      console.log("⚠️ WebSocket connection closed");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.transcript) {
          setTranscripts((prev) => [...prev, data.transcript]);
        }
      } catch (err) {
        console.warn("⚠️ Could not parse WebSocket message:", event.data);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  // Sync screen stream to video preview
  useEffect(() => {
    if (screenRef.current && screenStream) {
      screenRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  const handleScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      setScreenStream(stream);

      stream.getVideoTracks()[0].onended = () => {
        stopRecording();
        setScreenStream(null);
      };

      startRecordingAudio(stream);
    } catch (err) {
      console.error("Screen share failed:", err);
    }
  };

  const startRecordingAudio = (stream) => {
    if (recorderRef.current) return; // Already recording

    const audioTracks = stream.getAudioTracks();
    if (audioTracks.length === 0) {
      console.warn("No audio track found in stream.");
      return;
    }

    const audioStream = new MediaStream(audioTracks);
    const recorder = new MediaRecorder(audioStream, { mimeType: "audio/webm" });

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunksRef.current.push(e.data);
      }
    };

    recorder.onstop = async () => {
      const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
      chunksRef.current = [];

      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.send(audioBlob);
        console.log("🔍 Audio Blob:", audioBlob);
        wsRef.current.onmessage = (event) => {
          console.log("WebSocket response:", event);
        };
      } else {
        console.warn("WebSocket not open. Audio not sent.");
        ws.close();
      }
    };

    recorderRef.current = recorder;
    recorder.start();

    intervalRef.current = setInterval(() => {
      recorder.stop();
      setTimeout(() => recorder.start(), 100); // restart after slight delay
    }, 5000);
  };

  const stopRecording = () => {
    clearInterval(intervalRef.current);
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
    recorderRef.current = null;
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 flex flex-col p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Live Interview</h1>
          <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
            Premium
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-3 gap-6 mt-4 h-full">
          {/* Left Panel */}
          <div className="bg-black text-white p-4 rounded-md flex flex-col relative overflow-hidden">
            {!screenStream ? (
              <>
                <p className="text-center text-sm">
                  Connect to your interview meeting room
                </p>
                <button
                  onClick={handleScreenShare}
                  disabled={!!screenStream}
                  className={`mt-4 px-4 py-2 rounded text-white ${
                    screenStream
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {screenStream ? "Sharing..." : "Select"}
                </button>
              </>
            ) : (
              <div className="flex flex-col h-full">
                {/* Video Preview */}
                <div className="flex-1 bg-gray-900 rounded mb-2 flex items-center justify-center">
                  <video
                    ref={screenRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full h-full object-contain rounded"
                  />
                </div>

                {/* Live Transcript */}
                <div className="flex-1 bg-gray-800 text-white rounded p-3 overflow-auto">
                  <h2 className="text-sm font-semibold mb-2">Shared Notes</h2>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {transcripts.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>

                {/* Stop Button */}
                <button
                  onClick={() => {
                    stopRecording();
                    setScreenStream(null);
                    // wsRef.current?.close(); // 👈 this will close the WebSocket
                    // console.log("🛑 Stopped screen share and closed WebSocket");
                  }}
                  className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Stop Sharing
                </button>
              </div>
            )}
          </div>

          {/* Middle Panel */}
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
            <p className="text-green-600">Ready</p>
            <p className="text-sm text-gray-500">Interview Copilot w/ GPT-4o</p>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
            <p className="text-green-600">Ready</p>
            <p className="text-sm text-gray-500">
              Interview Copilot w/ Gemini-2.0 Flash
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
