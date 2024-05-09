// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/ban-circle-colorful.svg';

/**![BanCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4xICg2NzA0OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YmFuYW5vLWljb248L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cmFkaWFsR3JhZGllbnQgY3g9IjE1Ljg4NDA2MzglIiBjeT0iMTAuODk4NTg3MSUiIGZ4PSIxNS44ODQwNjM4JSIgZnk9IjEwLjg5ODU4NzElIiByPSI5Ny4xNTk0MDczJSIgaWQ9ImFudC13ZWIzLWljb24tYmFuLWNpcmNsZS1jb2xvcmZ1bC1yYWRpYWxHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjE1IiBvZmZzZXQ9IjAlIi8+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIxMDAlIi8+CiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD4KICAgICAgICA8cGF0aCBkPSJNMTI3LjMxMTkxNSw5Mi4zMTQzMzY4IEM3MS41MzUwMDQyLDk5LjMzNTc1MzEgNDUuODUxMzMzOSw1MC4yMjgyNTg5IDUwLjQwNjc0Miw0NS40MzY4ODk3IEM1My40MTQ2NDgyLDQyLjI3MzYxNjUgNTguMDkxNTg3OCw0Mi4wODM3MzkzIDYyLjE0NDY2NTQsNDEuOTc0NjYwOSBDODAuNzkzNjgzNyw0MS40Njk2Njg0IDEwNy4xOTAzMzksNjMuMjQyOTI2NSAxMTIuNTQzODA1LDYzLjEzNTg2ODEgQzEyMi45MTI0NzIsNjIuOTIzNzcxMiAxMzguNTExMDQ4LDQ2LjQ0NDg1NDggMTQ4LjczMTg1MywzMi44NjA1NTU2IEMxNTMuMDA5NzY0LDI3LjE3ODM3OTYgMTc5LjczNDU1NSwxOC42MTU3MjYxIDE3Ni43NzEyMSwzMy41NDUzMjU1IEMxNjcuMTYyMTE0LDgxLjk2NDAwOTggMTM0LjQxOTQ4Niw5MS40MTk0OTAxIDEyNy4zMTE5MTUsOTIuMzE0MzM2OCBaIE00OS42ODgwODUzLDAuNjg1NjYzMTU2IEMxMDUuNDY0OTk2LC02LjMzNTc1MzA2IDEzMS4xNDg2NjYsNDIuNzcxNzQxMSAxMjYuNTkxMjMzLDQ3LjU2MzExMDMgQzEyMy41ODMzMjcsNTAuNzI2MzgzNSAxMTguOTA4NDEyLDUwLjkxNjI2MDcgMTE0Ljg1NTMzNSw1MS4wMjUzMzkxIEM5Ni4yMDYzMTY1LDUxLjUzMDMzMTYgNjkuODA5NjYxMSwyOS43NTUwNTM1IDY0LjQ1NjE5NTcsMjkuODY0MTMxOSBDNTQuMDg3NTI3OSwzMC4wNzYyMjg4IDM4LjQ4ODk1MTgsNDYuNTU1MTQ1MiAyOC4yNjYxMjE5LDYwLjEzOTQ0NDQgQzIzLjk5MDIzNjQsNjUuODIxNjIwNCAtMi43MzQ1NTQzMSw3NC4zODQyNzM5IDAuMjI4NzkwMjk5LDU5LjQ1NjY5NDUgQzkuODM3ODg1ODcsMTEuMDM1OTkwMiA0Mi41ODA1MTQ0LDEuNTgwNTA5OTMgNDkuNjg4MDg1MywwLjY4NTY2MzE1NiBaIiBpZD0iYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLXBhdGgtMiIvPgogICAgICAgIDxmaWx0ZXIgeD0iLTEyLjclIiB5PSItMTcuNyUiIHdpZHRoPSIxMjUuNCUiIGhlaWdodD0iMTQ4LjQlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtZmlsdGVyLTMiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI2IiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjYuNSIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjI0ODEzMTc5MyAwIiB0eXBlPSJtYXRyaXgiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLVBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuLWNpcmNsZS1jb2xvcmZ1bC1pY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUwLjAwMDAwMCwgLTM1MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuLWNpcmNsZS1jb2xvcmZ1bC1iYW5hbm8taWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUwLjAwMDAwMCwgMTUwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAwLjAwMDAwMCwgMjAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtYmFzZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtcGF0aC0xIiBmaWxsPSIjRkJERDExIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgcng9IjE1MCIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAwLDE1MCBDMzAwLDIzMi44NDI3MTMgMjMyLjg0MjcxMywzMDAgMTUwLDMwMCBDNjcuMTU3Mjg3NSwzMDAgMS4wMTQ1MzA2MmUtMTQsMjMyLjg0MjcxMyAwLDE1MCBDLTYuMTMwMjkzOTNlLTE3LDE0OS40OTk0MjQgMC4wMDI0NTIwMjc5NiwxNDguOTk5NDIgMC4wMDczNDQ3MjgwOSwxNDguNSBDMC44MTIxNjYzMzQsMjMwLjY1MTg1NCA2Ny42NTc4NjMzLDI5NyAxNTAsMjk3IEMyMzIuMzQyMTM3LDI5NyAyOTkuMTg3ODM0LDIzMC42NTE4NTQgMjk5Ljk5MjY1NSwxNDguNDk5OTk4IEMyOTkuOTk3NTQ4LDE0OC45OTk0MiAzMDAsMTQ5LjQ5OTQyNCAzMDAsMTUwIFoiIGlkPSJhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtQ29tYmluZWQtU2hhcGUiIGZpbGw9IiNFOEM5MDAiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5OS45OTI2NTUsMTUxLjUwMDAwMiBDMjk5LjE4NzgzNCw2OS4zNDgxNDU5IDIzMi4zNDIxMzcsMyAxNTAsMyBDNjcuNjU3ODYzMywzIDAuODEyMTY2MzM0LDY5LjM0ODE0NTkgMC4wMDczNDQ3MDYxNywxNTEuNTAwMDAyIEMwLjAwMjQ1MjAyNzk2LDE1MS4wMDA1OCA2LjEzMDI5MzkzZS0xNywxNTAuNTAwNTc2IDAsMTUwIEMtMS4wMTQ1MzA2MmUtMTQsNjcuMTU3Mjg3NSA2Ny4xNTcyODc1LDEuNTIxNzk1OTRlLTE0IDE1MCwwIEMyMzIuODQyNzEzLC0xLjUyMTc5NTk0ZS0xNCAzMDAsNjcuMTU3Mjg3NSAzMDAsMTUwIEMzMDAsMTUwLjUwMDU3NiAyOTkuOTk3NTQ4LDE1MS4wMDA1OCAyOTkuOTkyNjU1LDE1MS41IEwyOTkuOTkyNjU1LDE1MS41MDAwMDIgWiIgaWQ9ImFudC13ZWIzLWljb24tYmFuLWNpcmNsZS1jb2xvcmZ1bC1Db21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRUY3RiIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLWlubmVycmluZyIgZmlsbD0iIzJBMkEyRSIgeD0iMTUiIHk9IjE1IiB3aWR0aD0iMjcwIiBoZWlnaHQ9IjI3MCIgcng9IjEzNSIvPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLWZpbmlzaCIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtcmFkaWFsR3JhZGllbnQtMSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiByeD0iMTUwIi8+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImFudC13ZWIzLWljb24tYmFuLWNpcmNsZS1jb2xvcmZ1bC1sb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MS44MDAwMDAsIDEwMy44MDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjEiIGZpbHRlcj0idXJsKCNhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtZmlsdGVyLTMpIiB4bGluazpocmVmPSIjYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLXBhdGgtMiIvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkJERDExIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhsaW5rOmhyZWY9IiNhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtcGF0aC0yIi8+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEyNi45ODMyNzIsNDYuODE3OTM2NCBDMTI1LjAwNTUzNywzNC44NTczMjggOTkuMjA1OTg2OCwtMy4xNDc4NDQ0NCA0OS42ODgwODUzLDMuMDg1NjYzMTYgQzQyLjU4MDUxNDQsMy45ODA1MDk5MyA5LjgzNzg4NTg3LDEzLjQzNTk5MDIgMC4yMjg3OTAyOTksNjEuODU2Njk0NSBDMC4xNjczNTMzMjYsNjIuMTY2MTc3NyAwLjExODY3NzE2Miw2Mi40NjU1NjQxIDAuMDgyMjk3MTk3Miw2Mi43NTUwODg3IEMtMC4wNjAwNzU1MjQ2LDYxLjgxMjkwNjMgLTAuMDIxNzQ3MDc1OSw2MC43MTg3NTM4IDAuMjI4NzkwMjk5LDU5LjQ1NjY5NDUgQzkuODM3ODg1ODcsMTEuMDM1OTkwMiA0Mi41ODA1MTQ0LDEuNTgwNTA5OTMgNDkuNjg4MDg1MywwLjY4NTY2MzE1NiBDMTAzLjMxNjU2OSwtNi4wNjUzMDA2OCAxMjkuMTI1NDQsMzkuMDcxOTUxNCAxMjYuOTgzMjcyLDQ2LjgxNzkzNjQgWiBNNTAuMDE1MTY3Nyw0OC41ODExOTY4IEM0OS43NjUxOTgyLDQ3LjA2OTgzNjggNDkuODk1NjU0Myw0NS45NzQ0NTA3IDUwLjQwNjc0Miw0NS40MzY4ODk3IEM1My40MTQ2NDgyLDQyLjI3MzYxNjUgNTguMDkxNTg3OCw0Mi4wODM3MzkzIDYyLjE0NDY2NTQsNDEuOTc0NjYwOSBDODAuNzkzNjgzNyw0MS40Njk2Njg0IDEwNy4xOTAzMzksNjMuMjQyOTI2NSAxMTIuNTQzODA1LDYzLjEzNTg2ODEgQzEyMi45MTI0NzIsNjIuOTIzNzcxMiAxMzguNTExMDQ4LDQ2LjQ0NDg1NDggMTQ4LjczMTg1MywzMi44NjA1NTU2IEMxNTIuOTIxMDU0LDI3LjI5NjIwOTMgMTc4LjYzNTgzOCwxOC45Njk2MTAzIDE3Ni45MTc3MjYsMzIuNjQ2NjIzIEMxNzUuMzc2MzI0LDIyLjQ0MjkyMzMgMTUyLjY0ODEwNywzMC4wNTg3NTQzIDE0OC43MzE4NTMsMzUuMjYwNTU1NiBDMTM4LjUxMTA0OCw0OC44NDQ4NTQ4IDEyMi45MTI0NzIsNjUuMzIzNzcxMiAxMTIuNTQzODA1LDY1LjUzNTg2ODEgQzEwNy4xOTAzMzksNjUuNjQyOTI2NSA4MC43OTM2ODM3LDQzLjg2OTY2ODQgNjIuMTQ0NjY1NCw0NC4zNzQ2NjA5IEM1OC4wOTE1ODc4LDQ0LjQ4MzczOTMgNTMuNDE0NjQ4Miw0NC42NzM2MTY1IDUwLjQwNjc0Miw0Ny44MzY4ODk3IEM1MC4yMzE0MzkyLDQ4LjAyMTI3MjggNTAuMTAwOTE3Miw0OC4yNzEyODMyIDUwLjAxNTE2NzcsNDguNTgxMTk2OCBaIiBpZD0iYW50LXdlYjMtaWNvbi1iYW4tY2lyY2xlLWNvbG9yZnVsLWhpZ2hsaWdodCIgZmlsbD0iI0ZGRUY3RiIvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTI2Ljk4MzI3Miw0NC40MTc5MzY0IEMxMjcuMjMzMjU2LDQ1LjkyOTc0NDQgMTI3LjEwMjY0NSw0Ny4wMjU0NDY1IDEyNi41OTEyMzMsNDcuNTYzMTEwMyBDMTIzLjU4MzMyNyw1MC43MjYzODM1IDExOC45MDg0MTIsNTAuOTE2MjYwNyAxMTQuODU1MzM1LDUxLjAyNTMzOTEgQzk2LjIwNjMxNjUsNTEuNTMwMzMxNiA2OS44MDk2NjExLDI5Ljc1NTA1MzUgNjQuNDU2MTk1NywyOS44NjQxMzE5IEM1NC4wODc1Mjc5LDMwLjA3NjIyODggMzguNDg4OTUxOCw0Ni41NTUxNDUyIDI4LjI2NjEyMTksNjAuMTM5NDQ0NCBDMjQuMDc4ODg1Myw2NS43MDM4MTU4IC0xLjYzNjA3MDMxLDc0LjAzMDQ2NDggMC4wODIyOTcxOTcyLDYwLjM1NTA4ODcgQzEuNjIzOTAyNTIsNzAuNTU2OTk2MSAyNC4zNTE3NDMxLDYyLjk0MTIxODIgMjguMjY2MTIxOSw1Ny43Mzk0NDQ0IEMzOC40ODg5NTE4LDQ0LjE1NTE0NTIgNTQuMDg3NTI3OSwyNy42NzYyMjg4IDY0LjQ1NjE5NTcsMjcuNDY0MTMxOSBDNjkuODA5NjYxMSwyNy4zNTUwNTM1IDk2LjIwNjMxNjUsNDkuMTMwMzMxNiAxMTQuODU1MzM1LDQ4LjYyNTMzOTEgQzExOC45MDg0MTIsNDguNTE2MjYwNyAxMjMuNTgzMzI3LDQ4LjMyNjM4MzUgMTI2LjU5MTIzMyw0NS4xNjMxMTAzIEMxMjYuNzY2Nzc3LDQ0Ljk3ODU1NTMgMTI2Ljg5NzQ1NCw0NC43MjgyNTA2IDEyNi45ODMyNzIsNDQuNDE3OTM2NCBaIE01MC4wMTUxNjc3LDQ2LjE4MTE5NjggQzUxLjk5MzIxNzEsNTguMTQwODM1NyA3Ny43OTI4MTcyLDk2LjE0Nzk5NSAxMjcuMzExOTE1LDg5LjkxNDMzNjggQzEzNC40MTk0ODYsODkuMDE5NDkwMSAxNjcuMTYyMTE0LDc5LjU2NDAwOTggMTc2Ljc3MTIxLDMxLjE0NTMyNTUgQzE3Ni44MzI2NiwzMC44MzU3MzQ0IDE3Ni44ODEzNDQsMzAuNTM2MjQ1MyAxNzYuOTE3NzI2LDMwLjI0NjYyMyBDMTc3LjA2MDA3MSwzMS4xODg5MTE5IDE3Ny4wMjE3MzMsMzIuMjgzMTY3OCAxNzYuNzcxMjEsMzMuNTQ1MzI1NSBDMTY3LjE2MjExNCw4MS45NjQwMDk4IDEzNC40MTk0ODYsOTEuNDE5NDkwMSAxMjcuMzExOTE1LDkyLjMxNDMzNjggQzczLjY4MTQzMDIsOTkuMDY1NTUyNSA0Ny44NzI2MzQxLDUzLjkyNDY4MDYgNTAuMDE1MTY3Nyw0Ni4xODExOTY4IFoiIGlkPSJhbnQtd2ViMy1pY29uLWJhbi1jaXJjbGUtY29sb3JmdWwtc2hhZG93IiBmaWxsPSIjRThDOTAwIi8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) */
export const BanCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ban-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

BanCircleColorful.displayName = 'BanCircleColorful';