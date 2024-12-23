interface OnLoadingProps {
  type: "spinner" | "ring";
  size?: "xs" | "sm" | "md" | "lg";
  isFullScreenCentered?: boolean;
}

function OnLoading({ type, size }: OnLoadingProps) {
  return (
    <>
      <span
        className={`loading loading-${type} 
        loading-${size ? size : "sm"}
       `}
      ></span>
    </>
  );
}

export default OnLoading;
