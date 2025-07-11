// import { Loader2Icon } from "lucide-react";
// import { useState, useRef, useEffect } from "react";

// export default function InterviewPage() {
//   const [screenStream, setScreenStream] = useState(null);
//   const [transcripts, setTranscripts] = useState([]);
//   const [response, setResponse] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const screenRef = useRef();
//   const recorderRef = useRef();
//   const chunksRef = useRef([]);
//   const intervalRef = useRef();
//   const wsRef = useRef(null);
//   const recognitionRef = useRef(null);

//   // useEffect(() => {
//   //   const SpeechRecognition =
//   //     window.SpeechRecognition || window.webkitSpeechRecognition;

//   //   if (!SpeechRecognition) {
//   //     alert("Speech Recognition not supported in this browser.");
//   //     return;
//   //   }
//   //   const recognition = new SpeechRecognition();
//   //   recognition.continuous = true; // Keep listening
//   //   recognition.interimResults = true; // Get partial results
//   //   recognition.lang = "en-US";

//   //   recognition.onresult = (event) => {
//   //     let finalTranscript = "";
//   //     for (let i = event.resultIndex; i < event.results.length; ++i) {
//   //       const transcriptChunk = event.results[i][0].transcript;
//   //       if (event.results[i].isFinal) {
//   //         finalTranscript += transcriptChunk + " ";
//   //       }
//   //     }
//   //     if (finalTranscript) {
//   //       console.log("Live Transcript:", finalTranscript);
//   //       setLiveTranscript((prev) => prev + finalTranscript);
//   //     }
//   //   };

//   //   recognition.onerror = (e) => {
//   //     console.error("Speech recognition error:", e);
//   //   };

//   //   recognitionRef.current = recognition;

//   //   recognition.start();

//   //   return () => {
//   //     recognition.stop();
//   //   };
//   // });

//   // WebSocket setup
//   useEffect(() => {
//     const ws = new WebSocket("wss://api.genesisliveai.com/api/user/ws/audio");
//     wsRef.current = ws;

//     ws.onopen = () => {
//       console.log("✅ WebSocket connected");
//     };

//     ws.onerror = (err) => {
//       console.error("❌ WebSocket error", err);
//     };

//     ws.onclose = () => {
//       console.log("⚠️ WebSocket connection closed");
//     };

//     ws.onmessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         console.log(data, "data.transcropt");
//         if (data.transcript) {
//           setTranscripts((prev) => [...prev, data.transcript]);
//           setResponse((prev) => [...prev, data.response]);
//         }
//       } catch (err) {
//         console.warn("⚠️ Could not parse WebSocket message:", event.data);
//       }
//     };

//     return () => {
//       ws.close();
//     };
//   }, []);

//   // Sync screen stream to video preview
//   useEffect(() => {
//     if (screenRef.current && screenStream) {
//       screenRef.current.srcObject = screenStream;
//     }
//   }, [screenStream]);

//   const handleScreenShare = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: true,
//       });

//       setScreenStream(stream);

//       stream.getVideoTracks()[0].onended = () => {
//         stopRecording();
//         setScreenStream(null);
//       };

//       startRecordingAudio(stream);
//     } catch (err) {
//       console.error("Screen share failed:", err);
//     }
//   };

//   const startRecordingAudio = (stream) => {
//     if (recorderRef.current) return; // Already recording

//     const audioTracks = stream.getAudioTracks();
//     if (audioTracks.length === 0) {
//       console.warn("No audio track found in stream.");
//       return;
//     }

//     const audioStream = new MediaStream(audioTracks);
//     const recorder = new MediaRecorder(audioStream, { mimeType: "audio/webm" });

//     recorder.ondataavailable = (e) => {
//       if (e.data.size > 0) {
//         chunksRef.current.push(e.data);
//       }
//     };

//     recorder.onstop = async () => {
//       const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
//       chunksRef.current = [];

//       if (wsRef.current?.readyState === WebSocket.OPEN) {
//         wsRef.current.send(audioBlob);
//         console.log("🔍 Audio Blob:", audioBlob);
//         wsRef.current.onmessage = (event) => {
//           console.log("WebSocket event data response:", event.data);
//           const data = JSON.parse(event.data);
//           console.log(data, "trancripted data in the response ");
//           if (data.transcript || data.response || data.error) {
//             setTranscripts((prev) => [...prev, data?.transcript]);
//             setResponse((prev) => [...prev, data?.response]);
//             setError(data?.error);
//             // setLoading(false);
//           }
//         };
//       } else {
//         console.warn("WebSocket not open. Audio not sent.");
//         ws.close();
//       }
//     };

//     recorderRef.current = recorder;
//     recorder.start();

//     intervalRef.current = setInterval(() => {
//       recorder.stop();
//       setTimeout(() => recorder.start(), 100); // restart after slight delay
//     }, 5000);
//   };

//   const stopRecording = () => {
//     clearInterval(intervalRef.current);
//     if (recorderRef.current && recorderRef.current.state !== "inactive") {
//       recorderRef.current.stop();
//     }
//     recorderRef.current = null;
//   };

//   // console.log(transcripts, "transcripts");

//   return (
//     <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="absolute inset-0 flex flex-col p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <h1 className="text-lg font-semibold">Live Interview</h1>
//           <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">
//             Premium
//           </span>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-3 gap-6 mt-4 h-full">
//           {/* Left Panel */}
//           <div className="bg-black text-white p-4 rounded-md flex flex-col relative overflow-hidden">
//             {!screenStream ? (
//               <>
//                 <p className="text-center text-sm">
//                   Connect to your interview meeting room
//                 </p>
//                 <button
//                   onClick={handleScreenShare}
//                   disabled={!!screenStream}
//                   className={`mt-4 px-4 py-2 rounded text-white ${
//                     screenStream
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-orange-500 hover:bg-orange-600"
//                   }`}
//                 >
//                   {screenStream ? "Sharing..." : "Select"}
//                 </button>
//               </>
//             ) : (
//               <div className="flex flex-col h-full">
//                 {/* Video Preview */}
//                 <div className="flex-1 bg-gray-900 rounded mb-2 flex items-center justify-center">
//                   <video
//                     ref={screenRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="w-full h-full object-contain rounded"
//                   />
//                 </div>

//                 {/* Live Transcript */}
//                 <div className="flex-1 bg-gray-800 text-white rounded p-3 overflow-auto">
//                   <h2 className="text-sm font-semibold mb-2">Shared Notes</h2>
//                   {/* {transcripts ?<p className="text-sm text-white whitespace-pre-wrap">
//                     {transcripts}
//                   </p>
//                   :

//                     <p className="text-sm text-white whitespace-pre-wrap">
//                       <Loader2Icon className="animate-spin text-white" />
//                       <span className="sr-only">Loading...</span>
//                     </p>

//                 } */}
//                   {error ? (
//                     <p className="text-sm text-red-400 whitespace-pre-wrap">
//                       {error}
//                     </p>
//                   ) : loading ? (
//                     <p className="text-sm text-white whitespace-pre-wrap flex items-center gap-2">
//                       <Loader2Icon className="animate-spin text-white" />
//                       <span>Loading...</span>
//                     </p>
//                   ) : transcripts?.length > 0 ? (
//                     <p className="text-sm text-white whitespace-pre-wrap">
//                       {transcripts.join("\n")}
//                     </p>
//                   ) : (
//                     <p className="text-sm text-white">
//                       No transcripts available.
//                     </p>
//                   )}
//                 </div>

//                 {/* Stop Button */}
//                 <button
//                   onClick={() => {
//                     stopRecording();
//                     setScreenStream(null);
//                     // wsRef.current?.close(); // 👈 this will close the WebSocket
//                     // console.log("🛑 Stopped screen share and closed WebSocket");
//                   }}
//                   className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
//                 >
//                   Stop Sharing
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Middle Panel */}
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
//             <p className="text-green-600">Ready</p>
//             <p className="text-sm text-gray-500">Interview Copilot w/ GPT-4o</p>
//           </div>

//           {/* Right Panel */}
//           <div className="flex flex-col items-center justify-center bg-white p-4 rounded-md shadow-md">
//             <p className="text-green-600">Ready</p>
//             <p className="text-sm text-gray-500">
//               Interview Copilot w/ Gemini-2.0 Flash
//             </p>
//             <p className="text-sm text-black whitespace-pre-wrap">
//               {response.join("\n")}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Loader2Icon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function InterviewPage() {
  const [screenStream, setScreenStream] = useState(null);
  const [transcripts, setTranscripts] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const screenRef = useRef();
  const recorderRef = useRef();
  const chunksRef = useRef([]);
  const intervalRef = useRef();
  const wsRef = useRef(null);

  // WebSocket setup
  useEffect(() => {
    const ws = new WebSocket("wss://api.genesisliveai.com/api/user/ws/audio");
    wsRef.current = ws;

    ws.onopen = () => console.log("✅ WebSocket connected");
    ws.onerror = (err) => console.error("❌ WebSocket error", err);
    ws.onclose = () => console.log("⚠️ WebSocket connection closed");

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(data, "trancripted data in the response ");
        if (data.transcript || data.response || data.error) {
          if (data.transcript) {
            setTranscripts((prev) => [...prev, data.transcript]);
          }
          if (data.response) {
            setResponse((prev) => [...prev, data.response]);
          }
          if (data.error) {
            setError(data.error);
          }
          setLoading(false); // ✅ stop loading on first message
        }
      } catch (err) {
        console.warn("⚠️ Could not parse WebSocket message:", event.data);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  useEffect(() => {
    if (screenRef.current && screenStream) {
      screenRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  const handleScreenShare = async () => {
    try {
      setLoading(true);
      setTranscripts([]);
      setResponse([]);
      setError(null);

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
    if (recorderRef.current) return;

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

    recorder.onstop = () => {
      const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
      chunksRef.current = [];

      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.send(audioBlob);
        console.log(audioBlob, "audioBlob sent");
      } else {
        console.warn("WebSocket not open. Audio not sent.");
        wsRef.current?.close();
      }
    };

    recorderRef.current = recorder;
    recorder.start();

    intervalRef.current = setInterval(() => {
      recorder.stop();
      setTimeout(() => recorder.start(), 100);
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

        {/* Grid */}
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
                {/* Video */}
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
                  {loading ? (
                    <p className="text-sm text-white whitespace-pre-wrap flex items-center gap-2">
                      <Loader2Icon className="animate-spin text-white" />
                      <span>Loading...</span>
                    </p>
                  ) : transcripts.length > 0 ? (
                    <div className="space-y-1 flex-col gap-2">
                      {transcripts.map((line, index) => (
                        <p
                          key={index}
                          className="text-sm text-white whitespace-pre-wrap"
                        >
                          {index + 1} {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-white">No transcripts yet.</p>
                  )}
                </div>

                {/* Stop Button */}
                <button
                  onClick={() => {
                    stopRecording();
                    setScreenStream(null);
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
          <div className="flex flex-col justify-center bg-white p-4 rounded-md shadow-md">
            <p className="text-green-600">Ready</p>
            {!response &&<p className="text-sm text-gray-500">
              Interview Copilot w/ Gemini-2.0 Flash
            </p>}
            <div className="w-full text-sm text-black whitespace-pre-wrap mt-2 text-left flex flex-col gap-2">
              {response.map((res, index) => (
                <p key={index}>{index+1.}{"  "}{res}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
