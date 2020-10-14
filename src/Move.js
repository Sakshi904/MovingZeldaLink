import { useEffect, useState } from "react";

export default function Move() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dir, setDir] = useState("down");

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    function handleKeydown(e) {
      if (e.key === "ArrowRight") move("right");
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
    }

    return () => window.removeEventListener("keydown", handleKeydown); //cleaning up use effect
  }, [x, y]);

  function move(direction) {
    setDir(direction);
    if (direction === "up") setY(y - 20);
    if (direction === "left") setX(x - 20);
    if (direction === "down") setY(y + 20);
    if (direction === "right") setX(x + 20);
  }
  return { x, y, dir, move };
}
