import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function ShareIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <Path
        d="M15.789 17.282l.315.184.271-.245c.438-.396 1.001-.641 1.625-.641A2.423 2.423 0 0120.42 19 2.423 2.423 0 0118 21.42 2.423 2.423 0 0115.58 19c0-.175.024-.356.066-.534l.086-.36-.32-.188-7.12-4.16-.32-.187-.272.252A2.487 2.487 0 016 14.5 2.496 2.496 0 013.5 12c0-1.384 1.116-2.5 2.5-2.5.655 0 1.246.256 1.7.677l.272.251.32-.186 7.05-4.11.314-.183-.077-.355A2.792 2.792 0 0115.5 5c0-1.384 1.116-2.5 2.5-2.5s2.5 1.116 2.5 2.5-1.116 2.5-2.5 2.5a2.487 2.487 0 01-1.7-.677l-.272-.251-.32.186-7.05 4.11-.314.183.077.355c.048.22.079.408.079.594s-.031.375-.079.594l-.077.355.314.183 7.13 4.15z"
        fill="#fff"
        stroke="#fff"
      />
    </Svg>
  );
}

export default ShareIcon;