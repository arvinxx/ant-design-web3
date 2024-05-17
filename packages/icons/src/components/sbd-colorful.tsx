// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/sbd-colorful.svg';

/**![SbdColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXNiZC1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzUzIDI0OTkuOCI+PHRpdGxlPnN0ZWVtLWRvbGxhcnMtc2JkLWxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0yODMuNzQsMjgxLjM4QzE3NS4yOCwzNzIuMjIsNjMuMzQsNDg0LjE2LDE3LjgyLDYyMC43MWMtNTIuNDgsMTYwLjk0LDIwLjkyLDMyNS4zNyw5MSw0NjguNyw2OS45MiwxNDYuOCwxNDYuODEsMjkwLjMyLDIxMy4yNCw0NDAuNjEsNTIuNDksMTE4LjkyLDEyNS44OSwyNTguNzYsMTA4LjQ2LDM5MS44Mi0xMy45NCw5NC41MS00NS41MSwxODUuMzUtNjIuOTQsMjc5Ljg2LTEzLjk1LDYzLDQ1LjUxLDAsNjYuNDMtMTcuNDMsMTIyLjQtMTA1LDI1NS4yNy0yMjMuODksMzA0LjI3LTM4NC44NCwyNC40LTgwLjM4LDEwLjQ2LTE1NC0xNy40My0yMzAuODYtMjcuODktNzMuNDEtNTkuNDYtMTQzLjMzLTkxLTIxNi45Mi02Ni40My0xNDctMTM2LjM1LTI5My44MS0yMDYuNDYtNDQwLjgxLTI3Ljg5LTUyLjQ5LTU2LTEwOC40Ni04MC4zOC0xNjQuNDQtMjQuNC01OS40Ni0zOC41NC0xMjIuNC00Mi0xODguODMtMy40OC01Mi40OS0zLjQ4LTEwMS40OSwzLjQ5LTE1NCwzLjQ4LTM4LjU0LDEzLjk0LTczLjQsMTcuNDMtMTExLjk0LDMuNjgtMjAuNzMtMTMuNzUtMjcuODktMzguMTYtMTAuMjdabTE2MDEuOTIsMGMtMTA4LjQ2LDkxLTIyMC40MSwyMDMtMjY1LjkyLDMzOS4zMy01Mi40OSwxNjAuOTQsMjAuOTIsMzI1LjM3LDkxLDQ2OC43LDY5LjkxLDE0NywxNDcsMjkwLjMyLDIxMy40Myw0NDAuODEsNTIuNDksMTE4LjkyLDEyNS44OSwyNTguNzUsMTA4LjQ2LDM5MS44MS0xMy45NCw5NC41MS00NS41MSwxODUuMzUtNjMsMjc5Ljg2LTEzLjk0LDYzLDQ1LjUyLDAsNjYuNDQtMTcuNDMsMTIyLjQtMTA1LDI1NS4yNi0yMjMuODksMzA0LjI2LTM4NC44NCwyNC40MS04MC4zNywxMC40Ni0xNTQtMTcuNDMtMjMwLjg2LTI3Ljg5LTczLjQtNTkuNDYtMTQzLjMyLTkxLTIxNi45Mi02Ni40NC0xNDctMTM2LjM1LTI5My44MS0yMDYuNDctNDQwLjgxLTI3Ljg5LTUyLjQ5LTU2LTEwOC40Ni04MC4zNy0xNjQuNDNxLTM2LjYxLTg5LjE5LTQyLTE4OC44NGMtMy40OS01Mi40OS0zLjQ5LTEwMS40OSwzLjQ5LTE1NCwzLjQ4LTM4LjU1LDEzLjk0LTczLjQxLDE3LjQzLTExMiwzLjY4LTIwLjkyLTEzLjc1LTI4LjA4LTM4LjM1LTEwLjQ2WiIgc3R5bGU9ImZpbGw6IzE2NTA5OCIvPjxwYXRoIGQ9Ik0xMDYwLjIsMTUuNDZDOTM3LjgsMTE3LDgwNC45MywyMzkuMzUsNzMxLjM0LDM4Mi42N2MtNTIuNDksMTAxLjQ5LTU5LjQ2LDIwNi40Ny0zMS41NywzMTEuMjUsMzUuMDUsMTI1Ljg5LDgzLjg2LDI1MS43OCwxMzYuMzUsMzc0LjE4LDEwMS40OCwyMzQuMzUsMjM0LjM1LDQ1NC43NiwzMzIuMzUsNjkyLjYsMzUsODMuODYsNzMuNCwxNzguMzcsODAuMzcsMjcyLjg5LDcsMTE1LjQzLTMxLjU3LDIzNy44NC02Mi45NCwzNDYuMy03LDMxLjU3LTI3Ljg5LDczLjQtMjQuNCwxMDUsMy40OCwyNC40LDE3LjQzLDEzLjk0LDMxLjU2LDMuNDlhMTc2Ni4zMywxNzY2LjMzLDAsMCwwLDE3MS40MS0xNTAuNDljMTQzLjMyLTEzNi4zNSwzMDcuNzUtMzE4LjQxLDI5My44MS01MzEuNjUtNy04Ny41NC00OS0xNzEuNDEtODMuODYtMjUxLjc4LTM4LjU0LTk0LjMyLTgwLjM4LTE4NS4xNi0xMjIuNDEtMjc2LjE5LTc2Ljg5LTE3MS40LTE1Ny40Ni0zMzkuMzItMjQxLjMyLTUwNy4yNC0yNy44OS01OS40Ni02My0xMTUuNDMtODMuODYtMTc0Ljg5LTMxLjU3LTgwLjM4LTQ1LjUyLTE2NC40NC00OS0yNDguMy0zLjQ5LTYyLjk0LDAtMTI5LjM3LDctMTkyLjMyLDMuNDgtNDIsMTcuNDMtODAuMzgsMTcuNDMtMTIyLjQxLDEwLjQ2LTM4LjU0LTEwLjQ2LTQyLTQyLTE3LjYyWiIgc3R5bGU9ImZpbGw6IzVjOWRkNSIvPjwvc3ZnPg==) */
export const SbdColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-sbd-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

SbdColorful.displayName = 'SbdColorful';