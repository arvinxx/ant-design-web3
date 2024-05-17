// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/glmr-colorful.svg';

/**![GlmrColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1nbG1yLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTQuMSAxMS44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNC4xIDExLjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik05LjksMC40YzEuNiwwLjcsMi43LDIuNCwyLjYsNC4xYy0yLjksMC01LjgsMC04LjYsMGMwLTEuMSwwLjQtMi4zLDEuMi0zLjFDNi4yLDAsOC4zLTAuNCw5LjksMC40eiIgc3R5bGU9ImZpbGw6ICM1RkMwQzE7Ii8+CjxwYXRoIGQ9Ik05LjcsMTEuM2MwLjIsMCwwLjMsMC4xLDAuMywwLjJjMCwwLjEtMC4xLDAuMi0wLjMsMC4ySDUuMWMtMC4yLDAtMC4zLTAuMS0wLjMtMC4yYzAtMC4xLDAuMS0wLjIsMC4zLTAuMkg5Ljd6CgkiIHN0eWxlPSJmaWxsOiAjRTExNzdDOyIvPgo8cGF0aCBkPSJNNC4xLDExLjhjMC4yLDAsMC4zLTAuMSwwLjMtMC4zcy0wLjEtMC4zLTAuMy0wLjNjLTAuMiwwLTAuMywwLjEtMC4zLDAuM1MzLjksMTEuOCw0LjEsMTEuOHoiIHN0eWxlPSJmaWxsOiAjRTExNzdDOyIvPgo8cGF0aCBkPSJNNi45LDEwLjZjMC4yLDAsMC4zLTAuMSwwLjMtMC4zUzcuMSwxMCw2LjksMTBzLTAuMywwLjEtMC4zLDAuM1M2LjcsMTAuNiw2LjksMTAuNnoiIHN0eWxlPSJmaWxsOiAjRTExNzdDOyIvPgo8cGF0aCBkPSJNMTIuMywxMGMwLjIsMCwwLjMsMC4xLDAuMywwLjNjMCwwLjItMC4xLDAuMy0wLjMsMC4zSDcuOGMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zYzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMi4zegoJIiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPHBhdGggZD0iTTAuOSw5LjRjMC4yLDAsMC4zLTAuMSwwLjMtMC4zYzAtMC4yLTAuMS0wLjMtMC4zLTAuM1MwLjYsOC45LDAuNiw5LjFDMC42LDkuMywwLjgsOS40LDAuOSw5LjR6IiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPHBhdGggZD0iTTUuNCw4LjhjMC4yLDAsMC4zLDAuMSwwLjMsMC4zYzAsMC4yLTAuMSwwLjMtMC4zLDAuM0gxLjdjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLTAuMiwwLjEtMC4zLDAuMy0wLjNINS40eiIgc3R5bGU9ImZpbGw6ICNFMTE3N0M7Ii8+CjxwYXRoIGQ9Ik0xMy44LDguOGMwLjIsMCwwLjMsMC4xLDAuMywwLjNjMCwwLjItMC4xLDAuMy0wLjMsMC4zSDYuNGMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zYzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMy44Cgl6IiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPHBhdGggZD0iTTEyLjQsNy42YzAuMiwwLDAuMywwLjEsMC4zLDAuM2MwLDAuMi0wLjEsMC4zLTAuMywwLjNIMy4zQzMuMiw4LjMsMyw4LjEsMyw3LjljMC0wLjIsMC4xLTAuMywwLjMtMC4zSDEyLjR6IiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPHBhdGggZD0iTTIuMyw4LjNjMC4yLDAsMC4zLTAuMSwwLjMtMC4zUzIuNSw3LjYsMi4zLDcuNlMyLDcuOCwyLDcuOVMyLjEsOC4zLDIuMyw4LjN6IiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPHBhdGggZD0iTTEwLjUsNi41YzAuMiwwLDAuMywwLjEsMC4zLDAuM2MwLDAuMi0wLjEsMC4zLTAuMywwLjNIMS40QzEuMyw3LjEsMS4xLDcsMS4xLDYuOGMwLTAuMiwwLjEtMC4zLDAuMy0wLjNIMTAuNXoKCSIgc3R5bGU9ImZpbGw6ICNFMTE3N0M7Ii8+CjxwYXRoIGQ9Ik0wLjMsNy4xYzAuMiwwLDAuMy0wLjEsMC4zLTAuM2MwLTAuMi0wLjEtMC4zLTAuMy0wLjNDMC4xLDYuNSwwLDYuNiwwLDYuOEMwLDcsMC4xLDcuMSwwLjMsNy4xeiIgc3R5bGU9ImZpbGw6ICNFMTE3N0M7Ii8+CjxwYXRoIGQ9Ik0yLjMsNS45YzAuMiwwLDAuMy0wLjEsMC4zLTAuM2MwLTAuMi0wLjEtMC4zLTAuMy0wLjNTMiw1LjUsMiw1LjZDMiw1LjgsMi4xLDUuOSwyLjMsNS45eiIgc3R5bGU9ImZpbGw6ICNFMTE3N0M7Ii8+CjxwYXRoIGQ9Ik0xMy4zLDUuM2MwLjIsMCwwLjMsMC4xLDAuMywwLjNjMCwwLjItMC4xLDAuMy0wLjMsMC4zSDMuNGMtMC4yLDAtMC4zLTAuMS0wLjMtMC4zYzAtMC4yLDAuMS0wLjMsMC4zLTAuM0gxMy4zCgl6IiBzdHlsZT0iZmlsbDogI0UxMTc3QzsiLz4KPC9zdmc+Cg==) */
export const GlmrColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-glmr-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

GlmrColorful.displayName = 'GlmrColorful';