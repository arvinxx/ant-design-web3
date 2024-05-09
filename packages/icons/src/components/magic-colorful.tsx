// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/magic-colorful.svg';

/**![MagicColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjY2FjYWNhIiB2aWV3Qm94PSIwIDAgMzEuOTk5OTY4IDQwLjIzNDYzOCIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1tYWdpYy1jb2xvcmZ1bC1zdmc0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzIGlkPSJhbnQtd2ViMy1pY29uLW1hZ2ljLWNvbG9yZnVsLWRlZnM0Ii8+CiAgPHBhdGggZD0ibSAwLDEyLjU0MTg4OCB2IDE1LjE1ODYwMSBjIDAsMi41MDk1OTkgMS4zMzMwMDcsNC44MjQyOTkgMy40ODc1MjcsNi4wNzEyOTkgbCA5LjkzNTU0LDUuNzY3MyBjIDEuNTk2NSwwLjkyNzQgMy41NTczLDAuOTI3NCA1LjE1MzgsMCBsIDkuOTM1NiwtNS43NjczIGMgMi4xNTQ1LC0xLjI1NDggMy40ODc1LC0zLjU2OTQ5OSAzLjQ4NzUsLTYuMDcxMjk5IFYgMTIuNTQxODg4IGMgMCwtMi41MDk1IC0xLjMzMywtNC44MjQyMzk1IC0zLjQ4NzUsLTYuMDcxMjE5NSBsIC05LjkzNTYsLTUuNzc1MDkgYyAtMS41OTY1LC0wLjkyNzQzOCAtMy41NTczLC0wLjkyNzQzOCAtNS4xNTM4LDAgbCAtOS45MzU1NCw1Ljc2NzI5IEMgMS4zMzMwMDcsNy43MTc2NDg1IDAsMTAuMDMyMzg5IDAsMTIuNTQxODg4IFoiIGZpbGw9IiNkYzI2MjYiIGlkPSJhbnQtd2ViMy1pY29uLW1hZ2ljLWNvbG9yZnVsLXBhdGgxIi8+CiAgPHBhdGggZD0ibSAyOC4xMzE4NjcsMTkuNzE5Mzg4IC0zLjY1MDMsLTEuMjQ2OSBjIC0xLjM0MDgsLTAuNDU5OSAtMi4zNDA1LC0xLjU5NzcgLTIuNjE5NSwtMi45OTI3OTkgbCAtMS41NDIzLC03LjY1MzM1MDUgYyAtMC4wMzg3LC0wLjE5NDg0IC0wLjIwOTIsLTAuMzM1MTMgLTAuNDEwNywtMC4zMzUxMyAtMC4yMDE1LDAgLTAuMzcyLDAuMTQwMjkgLTAuNDEwOCwwLjMzNTEzIGwgLTEuNTQyMiw3LjY1MzM0OTUgYyAtMC4yNzksMS4zOTUxIC0xLjI3ODgsMi41MzI5IC0yLjYxOTYsMi45OTI4IGwgLTMuNjUwMiwxLjI0NjkgYyAtMC4xNzA1LDAuMDU0NiAtMC4yNzksMC4yMTgzIC0wLjI3OSwwLjM5NzUgMCwwLjE3OTMgMC4xMTYyLDAuMzM1MSAwLjI3OSwwLjM5NzUgbCAzLjY1MDIsMS4yNDcgYyAxLjM0MDgsMC40NTk4IDIuMzQwNiwxLjU5NzcgMi42MTk2LDIuOTkyNyBsIDEuNTQyMiw3LjY1MzQgYyAwLjAzODgsMC4xOTQ4IDAuMjA5MywwLjMzNTEgMC40MTA4LDAuMzM1MSAwLjIwMTUsMCAwLjM3MiwtMC4xNDAzIDAuNDEwNywtMC4zMzUxIGwgMS41NDIzLC03LjY1MzQgYyAwLjI3OSwtMS4zOTUgMS4yNzg3LC0yLjUzMjkgMi42MTk1LC0yLjk5MjcgbCAzLjY1MDMsLTEuMjQ3IGMgMC4xNzA1LC0wLjA1NDYgMC4yNzksLTAuMjE4MiAwLjI3OSwtMC4zOTc1IDAsLTAuMTc5MiAtMC4xMTYzLC0wLjMzNTEgLTAuMjc5LC0wLjM5NzUgeiIgZmlsbD0iI2ZmZmRmNyIgaWQ9ImFudC13ZWIzLWljb24tbWFnaWMtY29sb3JmdWwtcGF0aDIiLz4KICA8cGF0aCBkPSJtIDguNDkzMzI3LDEyLjY5Nzg4OCAxLjI4NjU0LDAuNDM2NDAxIGMgMC40NzI3LDAuMTYzNyAwLjgyOTIsMC41NjExIDAuOTIyMiwxLjA1OTkgbCAwLjU0MjUsMi43MDQ0IGMgMC4wMTU1LDAuMDcwMiAwLjA3NzUsMC4xMTY5IDAuMTQ3MywwLjExNjkgMC4wNjk3LDAgMC4xMzE3LC0wLjA0NjcgMC4xNDcyLC0wLjExNjkgbCAwLjU0MjUsLTIuNzA0NCBjIDAuMTAwOCwtMC40OTEgMC40NDk1LC0wLjg5NjIgMC45MywtMS4wNTk5IGwgMS4yODY2LC0wLjQzNjQwMSBjIDAuMDYyLC0wLjAyMzQgMC4xMDA3LC0wLjA3OCAwLjEwMDcsLTAuMTQwMjk5IDAsLTAuMDYyNCAtMC4wMzg3LC0wLjExNjkgLTAuMTAwNywtMC4xNDAzIGwgLTEuMjg2NiwtMC40MzY1MDEgYyAtMC40NzI3LC0wLjE2MzYgLTAuODI5MiwtMC41NjExIC0wLjkzLC0xLjA1OTkgbCAtMC41NDI1LC0yLjcwNDM2OTUgYyAtMC4wMTU1LC0wLjA3MDE1IC0wLjA3NzUsLTAuMTE2OTEgLTAuMTQ3MiwtMC4xMTY5MSAtMC4wNjk4LDAgLTAuMTMxOCwwLjA0Njc2IC0wLjE0NzMsMC4xMTY5MSBsIC0wLjU0MjUsMi43MDQzNjk1IGMgLTAuMTAwNywwLjQ5MSAtMC40NDk1LDAuODk2MyAtMC45MjIyLDEuMDU5OSBsIC0xLjI4NjU0LDAuNDM2NTAxIGMgLTAuMDYyLDAuMDIzNCAtMC4xMDA3NSwwLjA3NzkgLTAuMTAwNzUsMC4xNDAzIDAsMC4wNjIzIDAuMDM4NzUsMC4xMTY4OTkgMC4xMDA3NSwwLjE0MDI5OSIgZmlsbD0iI2ZmZmRmNyIgaWQ9ImFudC13ZWIzLWljb24tbWFnaWMtY29sb3JmdWwtcGF0aDMiLz4KICA8cGF0aCBkPSJtIDExLjUwMDY2NywyNS45NzgxODkgLTEuNzI4MjMsLTAuNTg0NTAxIGMgLTAuNjM1NTEsLTAuMjE4MiAtMS4xMDgyNiwtMC43NTYgLTEuMjQwMDEsLTEuNDE4NDk5IGwgLTAuNzI4NTEsLTMuNjI0IGMgLTAuMDE1NSwtMC4wOTM1IC0wLjEwMDc1LC0wLjE1NTkwMSAtMC4xOTM3NSwtMC4xNTU5MDEgLTAuMDkzLDAgLTAuMTc4MjUsMC4wNjI0IC0wLjE5Mzc1LDAuMTU1OSBsIC0wLjcyODUsMy42MjQgYyAtMC4xMzE3NSwwLjY2MjUgLTAuNjA0NTEsMS4yMDAzIC0xLjI0MDAxLDEuNDE4NSBsIC0xLjcyODI3LDAuNTg0NTAxIGMgLTAuMDc3NSwwLjAyMzQgLTAuMTMxNzUsMC4xMDEyOTkgLTAuMTMxNzUsMC4xODcgMCwwLjA4NTggMC4wNTQyNSwwLjE2MzcgMC4xMzE3NSwwLjE4NzEgbCAxLjcyODI3LDAuNTg0NSBjIDAuNjM1NSwwLjIxODIgMS4xMDgyNiwwLjc1NiAxLjI0MDAxLDEuNDE4NSBsIDAuNzI4NSwzLjYyNCBjIDAuMDE1NSwwLjA5MzUgMC4xMDA3NSwwLjE1NTkgMC4xOTM3NSwwLjE1NTkgMC4wOTMsMCAwLjE3MDUsLTAuMDcwMiAwLjE5Mzc1LC0wLjE1NTkgbCAwLjcyODUxLC0zLjYyNCBjIDAuMTMxNzUsLTAuNjYyNSAwLjYwNDUsLTEuMjAwMyAxLjI0MDAxLC0xLjQxODUgbCAxLjcyODIzLC0wLjU4NDUgYyAwLjA3NzUsLTAuMDIzNCAwLjEzMTgsLTAuMTAxMyAwLjEzMTgsLTAuMTg3MSAwLC0wLjA4NTcgLTAuMDU0MywtMC4xNjM2IC0wLjEzMTgsLTAuMTg3IHoiIGZpbGw9IiNmZmZkZjciIGlkPSJhbnQtd2ViMy1pY29uLW1hZ2ljLWNvbG9yZnVsLXBhdGg0Ii8+Cjwvc3ZnPgo=) */
export const MagicColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-magic-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

MagicColorful.displayName = 'MagicColorful';