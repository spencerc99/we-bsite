import { useYDoc } from "zustand-yjs";
import { YJS_ROOM } from "../constants";
import { LetterInteractionData, LetterInterface } from "../types";
import { Letter } from "./Letter";
import { ShuffleIcon, ResetIcon, ViewGridIcon } from "@radix-ui/react-icons";
import { connectDoc } from "../utils/yjs";
import { useContext } from "react";
import { UserLetterContext } from "../context/UserLetterContext";

export function Desk() {
  const yDoc = useYDoc(YJS_ROOM, connectDoc);
  const sharedMap = yDoc.getMap<LetterInteractionData>("shared");
  const { letters } = useContext(UserLetterContext);

  const renderToolbar = () => {
    return (
      <div className="toolbar">
        {/* reset letters */}
        <button>
          <ResetIcon />
        </button>
        {/* shuffle letters */}
        <button>
          <ShuffleIcon />
        </button>
        {/* toggle between StackIcon */}
        <button>
          <ViewGridIcon />
        </button>
      </div>
    );
  };

  return (
    <>
      {/* {renderToolbar()} */}
      <div
        id="test"
        style={{
          position: "absolute",
          background: "red",
          width: "100px",
          height: "100px",
        }}
      ></div>
      <div id="desk">
        {/* If loading add loading indicator */}
        {letters?.map((letter) => (
          <Letter letter={letter} key={letter.id} shared={sharedMap} />
        ))}
      </div>
    </>
  );
}
