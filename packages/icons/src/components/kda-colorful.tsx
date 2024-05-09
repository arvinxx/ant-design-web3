// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/kda-colorful.svg';

/**![KdaColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1rZGEtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMDAwIDIyMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwMDAgMjIwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWtkYS1jb2xvcmZ1bC1TVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI4OTEuMzgwOSIgeTE9IjExNDkuOTMzNSIgeDI9IjEzOTguNjcwOSIgeTI9IjQyMy4yNzM0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjE5OS44ODk5KSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFQTA3OEMiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzY5MDA5QSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBkPSJNMTA0Ny40LDgwOS44bDU3LDc0YzAsMCwzNDMsNTAzLjgsNTE0LjgsNzU1LjNjMTE4LjUsMTc0LjUsMjM3LDM0OSwzNTUuNyw1MjMuNGM5LjEsMTIuNSwxNy41LDI1LjUsMjUuMSwzOC45CgljLTIxMS4yLDAuOS00MjIuNCwwLjQtNjMzLjUsMC4yYy0yMTAuMi0zMTItNjI3LjUtOTM4LjEtNjI3LjUtOTM4LjFsLTM2LTY1LjYiIHN0eWxlPSJmaWxsOiB1cmwoI2FudC13ZWIzLWljb24ta2RhLWNvbG9yZnVsLVNWR0lEXzFfKTsiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJhbnQtd2ViMy1pY29uLWtkYS1jb2xvcmZ1bC1TVkdJRF8wMDAwMDE0NjQ2NDg4MDc0NTU1MTQ1NDQ5MDAwMDAwNzc3NTc5OTQxNjIwMTU0MDI2OF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDU0LjY1MDMiIHkxPSIxMTU3LjE5OTMiIHgyPSIxNDg2LjM4MDIiIHkyPSIxNzkxLjMxOTIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAyMTk5Ljg4OTkpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0VBMDc4QyIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNjkwMDlBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjYW50LXdlYjMtaWNvbi1rZGEtY29sb3JmdWwtU1ZHSURfMDAwMDAxNDY0NjQ4ODA3NDU1NTE0NTQ0OTAwMDAwMDc3NzU3OTk0MTYyMDE1NDAyNjhfKTsiIGQ9Ik01NTQsMTQ1NS4yYy03LjgsNi4yLTcuMiwxNi41LTcuMiwyNS41CglsLTguNSwyOC40bC00MS4xLTY2MC43bDUwLjMtNTMuOGMxMi45LTguOCw1MTIuNC01MzYuOCw3NTIuOC03ODguMmM1LjctOCwxNi01LjYsMjQuNC02LjNjMjA5LjIsMC43LDYyNy41LDAuNSw2MjcuNSwwLjUKCVM2MTQuOSwxMzkwLjYsNTU0LDE0NTUuMnoiLz4KPHBhdGggZD0iTTAsMC43aDU0Ny40djIyMDAuMUgwVjAuN3oiIHN0eWxlPSJmaWxsOiAjNjkwMDlBOyIvPgo8L3N2Zz4K) */
export const KdaColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-kda-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

KdaColorful.displayName = 'KdaColorful';