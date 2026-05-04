import * as React from "react";

const Switch = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} {...props}>
      {/* UI */}
    </button>
  );
});

Switch.displayName = "Switch";

export { Switch };
