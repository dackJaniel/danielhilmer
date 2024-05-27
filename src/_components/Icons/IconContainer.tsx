interface IconContainerProps {
  gap?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const IconContainer = ({ gap = "md", children }: IconContainerProps) => {
  return (
    <ul
      className={`flex items-center ${
        gap === "sm" ? "gap-1" : gap === "md" ? "gap-2" : "gap-3"
      }`}>
      {children}
    </ul>
  );
};

export default IconContainer;
