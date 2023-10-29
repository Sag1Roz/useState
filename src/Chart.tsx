import { useState } from "react";
type Button = {
  name: string;
  content: string;
  isActive: boolean;
};
export function Chart() {
  const buttons: Button[] = [
    { name: "Users", content: "users", isActive: true },
    { name: "Products", content: "products", isActive: false },
    { name: "Tags", content: "tags", isActive: false },
  ];
  const [showText, setShowText] = useState("Showing all users");

  function changeText(value: string) {
    buttons.forEach((button) => (button.isActive = false));
    const index = buttons.findIndex((button) => button.content === value);
    if (index !== -1) buttons[index].isActive = true;
    console.log(buttons);

    setShowText(`Showing all ${value}`);
  }

  return (
    <div className="h-screen flex  flex-col justify-center items-center">
      <div className="flex">
        {buttons.map((button, i) => {
          return (
            <button
              onClick={() => changeText(button.content)}
              className="border px-8 py-2  ${button.isActive &&  text-emerald-700}"
              key={i}
            >
              {button.name}
            </button>
          );
        })}
      </div>
      <div className="border py-44 px-80 text-center">{showText}</div>
    </div>
  );
}
