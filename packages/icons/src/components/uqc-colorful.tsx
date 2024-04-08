// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/uqc-colorful.svg';

/**![UqcColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi11cWMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1ODQuNCA1NjEuNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTg0LjQgNTYxLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjx0aXRsZT51cXVpZCBjb2luIGxvZ288L3RpdGxlPgo8cGF0aCBkPSJNMTkzLjYsMC42YzAuNSwwLjIsMC44LDAuNiwwLjcsMS4xYzAsMSwwLDEuOSwwLDIuOXYzNTMuMWMwLDEuMi0wLjEsMi4zLTAuMSwzLjVjMC41LDEsMS40LDAuNSwyLDAuNQoJYzYzLjQsMCwxMjYuOCwwLDE5MC4zLDAuMWMyLDAsMi45LTAuNSwyLjYtMi42YzAtMC43LDAtMS4zLDAtMmMwLTExNy42LDAtMjM1LjEsMC0zNTIuN2MwLTEuMi0wLjctMi44LDAuOC0zLjcKCWMwLjUtMC40LDEuMy0wLjMsMS43LDAuMmMwLDAsMCwwLjEsMC4xLDAuMWMwLjUsMC43LDEsMS40LDEuNCwyLjJjNy4yLDE0LjMsMTQuNiwyOC43LDIxLjcsNDNjNS45LDEyLDExLjksMjQsMTcuOCwzNS45CgljNi42LDEzLjIsMTMuMywyNi41LDE5LjksMzkuN2M2LDExLjksMTEuOSwyMy45LDE3LjgsMzUuOGM1LjMsMTAuOCwxMC44LDIxLjQsMTYsMzIuMmMwLjgsMS42LDIsMi45LDIuNSw0LjZjMC4zLDIsMC4zLDQuMSwwLjIsNi4xCgl2MzQ0YzAsMSwwLDEuOSwwLDIuOWMwLDMuOCwwLDMuOCwzLjcsNC41YzAuNSwwLjEsMC45LDAuMywxLjMsMC43Yy0yLjUsMS4yLTUuMSwxLjYtNy44LDIuMmMtMTEuOCwyLjgtMjMuNyw0LjYtMzUuOCw1LjUKCWMtNS42LDAuNC0xMS4yLDAuNS0xNi44LDAuNmMtMjguOSwwLjUtNTcuOSwwLjMtODYuOCwwLjNjLTUwLjIsMC0xMDAuNSwwLTE1MC44LTAuMWMtMSwwLTIuMSwwLjMtMy4xLTAuM2MwLjMtMC4yLDAuNi0wLjUsMS0wLjYKCWMxLjgtMC40LDMuNi0wLjUsNS41LTAuNGgxODMuOWMxLjYsMC4xLDMuMywwLDQuOS0wLjJjMS41LTAuNywwLjktMiwxLTMuMWMwLTQwLjgsMC04MS43LDAtMTIyLjV2LTYzLjljLTAuMS0xLjMsMC0yLjYsMC4xLTMuOQoJYy0xLjUsNC43LTQsOS4xLTYuMiwxMy42Yy04LjEsMTYuOS0xNiwzMy45LTI0LjEsNTAuOWMtNC40LDkuMy04LjgsMTguNS0xMy4yLDI3LjhjLTAuNiwxLjMtMS4yLDIuNy0yLjYsMy40CgljLTEuNCwwLjQtMi45LDAuNS00LjMsMC40aC05NC42Yy0xLjMsMC4xLTIuNSwwLTMuOC0wLjNjLTEuOS0wLjYtMi41LTIuMy0zLjItMy45Yy01LjUtMTEuNy0xMS4xLTIzLjQtMTYuNi0zNS4yCgljLTYtMTIuNy0xMi0yNS4zLTE4LTM4Yy0yLjktNi01LjYtMTIuMS04LjgtMTguNGMwLDEuNywwLDMuMSwwLDQuNWMwLDYxLjQsMCwxMjIuNywwLDE4NC4xYzAsMS45LDAuNSwzLjktMC45LDUuNgoJYy0xLDAtMS45LDAuMi0yLjksMC4yYy0xNC4zLDAtMjguNiwwLTQyLjksMGMtMy43LDAtNy4zLTAuMi0xMS0wLjNjLTAuNywwLTEuNCwwLjEtMS45LTAuNGMwLjctMC42LDEuNS0wLjMsMi4yLTAuMwoJYzE3LjUsMCwzNSwwLDUyLjUsMGMwLjcsMCwxLjMtMC4xLDEuNSwwYy0xNy40LDAtMzUuMiwwLTUzLjEsMGMtMSwwLTIuMS0wLjQtMy4xLDAuNGMtNC40LDAuMi04LjktMC40LTEzLjMtMC45CgljLTguNi0wLjgtMTctMi42LTI1LjQtNGMtMC4zLTAuMS0wLjUtMC4yLTAuOC0wLjRjMS0yLjIsMC45LTQuNSwwLjktNi44YzAtMTE1LjQsMC0yMzAuOCwwLTM0Ni4yYy0wLjEtMiwwLTQuMSwwLjItNi4xCgljMC41LTIuMSwxLjMtNC4xLDIuMy01LjljNi0xMS45LDEyLTIzLjgsMTcuOS0zNS44YzIxLjgtNDQuNyw0NC4zLTg5LDY2LjQtMTMzLjVjMi44LTUuNiw1LjYtMTEsOC4zLTE2LjZjMC40LTAuOSwwLjctMi44LDIuNS0xLjIKCWMwLDExMC40LDAsMjIwLjgsMCwzMzEuMmMwLDguNiwwLDE3LjIsMCwyNS45YzAtMTE4LjEsMC0yMzYuMSwwLTM1NC4yQzE5My4yLDQsMTkyLjYsMi4zLDE5My42LDAuNnoiIHN0eWxlPSJmaWxsOiAjRTg1QzUwOyIvPgo8cGF0aCBkPSJNOTYuNSwxOTQuN2MwLDExOC42LDAsMjM3LjIsMCwzNTUuN2MwLDEsMCwxLjksMCwyLjljMC4xLDEuNC0wLjgsMS42LTEuOCwxLjdjLTE0LjMtMy4zLTI4LjItNy43LTQxLjItMTQuNAoJYy03LjItMy43LTE0LjItNy42LTIwLjQtMTIuN2MtMTcuMi0xNC4xLTI5LjItMzEuNC0zMS44LTU0LjFjMC0wLjgsMC0xLjUsMC0yLjNjLTAuMy0xLTAuNC0yLjEtMC4yLTMuMmMwLTE1My45LDAtMzA3LjcsMC00NjEuNgoJYy0wLjEtMS4xLDAtMi4xLDAuMi0zLjJjMS40LDAuMSwxLjcsMS4zLDIuMSwyLjJDOC43LDE2LjUsMTQsMjcuMiwxOS40LDM3LjljNi41LDEyLjksMTMsMjUuNywxOS40LDM4LjdjNiwxMiwxMi4xLDI0LDE4LDM2LjEKCWMzLjcsNy42LDcuNiwxNS4xLDExLjMsMjIuNmMzLjUsNi45LDcsMTMuOCwxMC40LDIwLjhjNCw4LjQsOC4yLDE2LjcsMTIuNSwyNC45YzEuOSwzLjUsMy4zLDcuMiw1LjEsMTAuOAoJQzk2LjcsMTkyLjYsOTYuOCwxOTMuNyw5Ni41LDE5NC43eiIgc3R5bGU9ImZpbGw6ICNDRjMzMzk7Ii8+CjxwYXRoIGQ9Ik00OTQsNTUyLjdjLTEuNC0wLjEtMi43LDAuMS00LDAuNWMtMS4xLDAuMi0xLjktMC4xLTEuOS0xLjVjMC0wLjcsMC0xLjMsMC0yVjE5My42Yy0wLjktMS42LDAuMy0yLjgsMC45LTQKCWM5LjYtMTguNywxOS4xLTM3LjUsMjguNS01Ni40YzAuMi0wLjQsMC41LTAuOSwwLjgtMS4zYzAuMS0wLjIsMC4yLTAuNCwwLjMtMC42YzAuMi0wLjMsMC4zLTAuNiwwLjUtMC45czAuMi0wLjQsMC4zLTAuNgoJYzAuMy0wLjYsMC42LTEuMywwLjktMS45YzAuMS0wLjIsMC4zLTAuNSwwLjQtMC43YzUtOS40LDkuNi0xOSwxNC40LTI4LjZjMi42LTUsNS0xMCw3LjUtMTUuMWMyLjMtNC41LDQuNS04LjksNi43LTEzLjQKCWMwLjItMC4zLDAuMy0wLjYsMC41LTAuOGM3LjQtMTQuNCwxNC40LTI5LDIxLjgtNDMuM2MzLjEtNS45LDYuMS0xMS45LDkuMi0xNy44YzAuNS0xLjEsMC45LTIuNCwyLjUtMi43YzAuNiwxLjIsMC4zLDIuNCwwLjMsMy42CgljMCw5MS40LDAsMTgyLjgsMCwyNzQuMWMwLDYwLjcsMCwxMjEuNCwwLDE4Mi4xYzAuMSwxLjIsMC4xLDIuMy0wLjIsMy41YzAuNCw0LjItMS4yLDgtMi4yLDExLjljLTMuMiwxMi40LTEwLDIyLjctMTguNCwzMi4xCgljLTYuMyw3LjMtMTMuNiwxMy44LTIxLjcsMTkuMWMtMTAuMiw2LjctMjEuMiwxMi4yLTMyLjcsMTYuNEM1MDMuOCw1NDkuOSw0OTguOSw1NTEuNSw0OTQsNTUyLjd6IiBzdHlsZT0iZmlsbDogI0NGMzMzOTsiLz4KPHBhdGggZD0iTTk2LjUsMTk0LjdjLTAuMi0xLTAuNS0xLjktMS4xLTIuN2MtMi43LTUuNy01LjctMTEuMi04LjMtMTYuOWMtMi42LTUuNS01LjgtMTAuNy04LjItMTYuMwoJYy0yLjItNS4yLTUuMy05LjktNy41LTE1Yy0yLjgtNi41LTYuNy0xMi40LTkuMy0xOWMtMS0yLjYtMi43LTQuOS0zLjktNy40Yy0xLjktMy44LTMuNC03LjgtNS41LTExLjVjLTQuMS03LjItNy40LTE0LjktMTEuMi0yMi4yCgljLTIuNS00LjgtNS4xLTkuNS03LjMtMTQuNWMtMi40LTUuNC01LjYtMTAuNC03LjktMTUuOGMtMi44LTYuNi02LjctMTIuNi05LjUtMTkuMmMtMS4zLTMuMi0zLjQtNi4xLTQuOC05LjMKCUM4LjgsMTcuOSw0LjcsMTEuMywxLjIsNC4yVjQ2OGMwLDEuMiwwLDIuMywwLDMuNWMtMS0zLjItMC43LTYuNS0wLjctOS44Yy0wLjEtNDEtMC4xLTgyLjEsMC0xMjMuMVY5LjNjMC4xLTIuOSwwLTUuOC0wLjMtOC43CglDMS4xLDAuMywyLjEsMC4yLDMsMC40YzYyLjMsMCwxMjQuNywwLDE4NywwaDEuN2MyLjEsMCwxLjMsMS4xLDAuNywybC0zNy45LDc1LjVjLTcuOSwxNS44LTE1LjgsMzEuNS0yMy42LDQ3LjMKCWMtMi45LDUuOC01LjYsMTEuNy04LjUsMTcuNWMtOCwxNi0xNiwzMi0yNCw0OEw5Ni41LDE5NC43eiIgc3R5bGU9ImZpbGw6ICNFMzM5MzY7Ii8+CjxwYXRoIGQ9Ik01MTguMywxMzIuNmMtMC4xLDAuOC0wLjQsMS41LTAuOCwyLjFjLTYuMywxMi43LTEyLjYsMjUuNS0xOS4xLDM4LjFjLTMuMSw2LTYuMSwxMi05LjIsMTguMQoJYy0wLjUsMC44LTAuOSwxLjctMS4xLDIuN2MtMS4xLDAtMS40LTEtMS43LTEuN2MtMS4zLTIuNS0yLjMtNS4xLTMuNi03LjZjLTEuNS0zLTMuMi02LTQuNy05Yy0yLjgtNS41LTUuNy0xMS04LjMtMTYuNgoJYy0yLjctNS45LTYuMS0xMS40LTguNy0xNy40Yy0yLjgtNi40LTYuNS0xMi4zLTkuMi0xOC43Yy0xLjUtMy41LTMuNi02LjgtNS4zLTEwLjNjLTIuNy01LjQtNS42LTEwLjgtOC4xLTE2LjMKCWMtMi45LTYuMy02LjUtMTIuMy05LjItMTguN2MtMS41LTMuNS0zLjctNi44LTUuMy0xMC4zYy0zLTYuNy02LjgtMTMtOS43LTE5LjhjLTEuNS0zLjUtMy42LTYuOC01LjMtMTAuMwoJYy01LjUtMTEuMS0xMS4xLTIyLjEtMTYuNi0zMy4yYy0wLjYtMC45LTEtMS45LTEuMi0yLjlsMC41LTAuM2MzNy45LTAuMSw3NS44LDAsMTEzLjgsMGMyNS4yLDAsNTAuMywwLDc1LjUsMGMxLDAsMi4xLTAuMywzLjEsMC4zCgljMC4xLDAuOCwxLDEuNSwwLjEsMi40Yy0yLjgsMy4zLTQuMSw3LjQtNiwxMS4xYy05LjYsMTguNi0xOC45LDM3LjQtMjguMyw1Ni4ybDAsMGMtMi40LDQuNC00LjcsOC45LTYuOCwxMy40CgljLTIuNiw1LTUuMSwxMC03LjYsMTUuMWMtNSw5LjYtOS42LDE5LjUtMTQuNywyOWwwLDBjLTAuNSwwLjctMC45LDEuNS0xLjIsMi4zbDAsMGMtMC40LDAuMy0wLjMsMC45LTAuNiwxLjJsMCwwCglDNTE4LjUsMTMxLjcsNTE4LjYsMTMyLjMsNTE4LjMsMTMyLjZ6IiBzdHlsZT0iZmlsbDogI0UzMzkzNjsiLz4KPHBhdGggZD0iTTU0OS43LDcwLjRjMS41LTUuMiw0LjMtOS45LDYuOS0xNC42YzAuOS0xLjYsMS41LTMuMywyLjMtNWMzLjUtNi44LDYuOC0xMy42LDEwLjItMjAuNGMyLjctNS4zLDUuMi0xMC43LDgtMTYKCWMxLjktMy41LDMuNS03LDUuMy0xMC42YzAuNC0wLjgsMC43LTEuNCwxLjctMC44YzAsMTguOCwwLDM3LjYsMCw1Ni4zYzAsMTMzLjgsMCwyNjcuNiwwLDQwMS40YzAsMi42LDAuMiw1LjItMC41LDcuOAoJYzAtMS0wLjEtMS45LTAuMS0yLjlWNS45Yy0wLjksMC4xLTEsMC44LTEuMiwxLjRjLTEsMS45LTEuOSwzLjgtMi45LDUuN2MtOS41LDE4LjMtMTguNywzNi43LTI3LjksNTUuMkM1NTEsNjksNTUwLjcsNzAsNTQ5LjcsNzAuNAoJeiIgc3R5bGU9ImZpbGw6ICNFMzRDMzc7Ii8+CjxwYXRoIGQ9Ik0zOTEuMSwwLjdjLTEuMiwwLjItMiwxLjMtMS44LDIuNWMwLDAsMCwwLjEsMCwwLjFjMCwwLjgsMCwxLjUsMCwyLjNjMCwxMTcuNCwwLDIzNC45LDAsMzUyLjMKCWMwLDQuNiwwLjUsNC4yLTQuMiw0LjJjLTYyLjQsMC0xMjQuOSwwLTE4Ny4zLDBjLTEuMiwwLTIuNywwLjctMy43LTAuOGMxLDAuNCwyLjEsMC41LDMuMSwwLjRoMTg4LjZjMC40LDAsMC44LDAsMS4yLDAKCWMxLjQsMC4xLDItMC40LDEuOS0xLjhjLTAuMS0wLjksMC0xLjcsMC0yLjZWNC41YzAtMC43LDAtMS4zLDAtMmMtMC4yLTEuNywwLjctMi4zLDIuMi0yLjJMMzkxLjEsMC43TDM5MS4xLDAuN3oiIHN0eWxlPSJmaWxsOiAjRTk2NTRDOyIvPgo8cGF0aCBkPSJNMTkyLjMsMi41YzAtMC44LDAuNy0xLjktMS0xLjdjLTAuOCwwLTEuNiwwLTIuMywwSDBjMC44LTEuMSwyLTAuNSwyLjktMC41YzEzLjMtMC4xLDI2LjUsMCwzOS43LDAKCWM0OSwwLDk4LjEsMCwxNDcuMSwwYzEuMiwwLDIuNS0wLjQsMy43LDAuNWMwLDQwLjMsMCw4MC42LDAsMTIwLjh2MjM5LjNjLTAuOS0wLjQtMC41LTEuMS0wLjYtMS42YzAtMC43LDAtMS4zLDAtMgoJYzAtMTE2LjksMC0yMzMuOSwwLTM1MC45QzE5Mi45LDUsMTkzLjQsMy42LDE5Mi4zLDIuNXoiIHN0eWxlPSJmaWxsOiAjRTc1NjNEOyIvPgo8cGF0aCBkPSJNMzkxLjEsMC43YzAtMC4xLDAtMC4zLDAtMC40YzEuMS0wLjEsMi4xLTAuMiwzLjItMC4yYzYyLjIsMCwxMjQuMywwLDE4Ni41LDBjMS4xLDAsMi4zLTAuNSwzLjIsMC41TDM5MS4xLDAuNwoJeiIgc3R5bGU9ImZpbGw6ICNFODVDNTA7Ii8+CjxwYXRoIGQ9Ik0zODkuMyw1NjAuN2MtMS4zLDAtMi41LDAtMy44LDBIMTk3Yy0xLjIsMC0yLjMtMC4xLTMuNS0wLjFjLTAuMi0xLjIsMC0yLjMsMC42LTMuNGM1LTEwLjUsOS45LTIxLDE0LjktMzEuNQoJYzkuOS0yMC43LDE5LjYtNDEuNSwyOS41LTYyLjFjMC4zLTAuOCwwLjgtMS42LDEuNC0yLjFoMTAzLjRjMi41LDQuNCw0LjUsOSw2LjYsMTMuNWM0LDguNyw4LjIsMTcuMywxMi4zLDI2CgljOC44LDE4LjUsMTcuNiwzNy4xLDI2LjMsNTUuNkMzODkuMyw1NTcuOSwzODkuNiw1NTkuMywzODkuMyw1NjAuN3oiIHN0eWxlPSJmaWxsOiAjQ0YzMzM5OyIvPgo8cGF0aCBkPSJNMjQwLDQ2MS41Yy0wLjQsMS43LTEsMy4zLTEuOSw0LjljLTQuOCwxMC05LjcsMjAtMTQuNCwzMGMtMy4yLDYuOC02LjQsMTMuNi05LjYsMjAuNAoJYy0zLjcsNy45LTcuNCwxNS43LTExLjIsMjMuNWMtMi44LDUuOC01LjUsMTEuNy04LjIsMTcuNmMtMC40LDAuOS0wLjcsMS44LTEuMSwyLjdsLTAuNywwLjJsMCwwYzAtMS4zLDAtMi41LDAtMy44VjM2NAoJYzAuOSwwLjYsMS42LDEuNSwxLjksMi41YzEuOSw0LjIsMy44LDguNSw1LjgsMTIuNmMzLjEsNi41LDYuMywxMi45LDkuMywxOS4zYzUuMywxMS40LDEwLjcsMjIuNywxNi4xLDM0CgljMy4yLDYuNyw2LjMsMTMuNSw5LjYsMjAuMkMyMzcsNDU1LjYsMjM4LDQ1OC44LDI0MCw0NjEuNXoiIHN0eWxlPSJmaWxsOiAjRTMzOTM3OyIvPgo8cGF0aCBkPSJNMzg5LjMsNTYwLjdjLTAuNy0zLjUtMi43LTYuNC00LTkuNmMtMS43LTQuMS0zLjctOC01LjctMTIuMWMtNC41LTkuNC05LjEtMTguOC0xMy41LTI4LjIKCWMtMy42LTcuNi03LjItMTUuMi0xMC44LTIyLjhjLTMuOS04LTcuNS0xNi4xLTExLjMtMjQuMWMtMC40LTAuOC0wLjctMS42LTAuNy0yLjVjNS44LTEyLjIsMTEuNy0yNC40LDE3LjQtMzYuNwoJYzMuNC03LjIsNi44LTE0LjMsMTAuMi0yMS41YzMuOC04LDcuNS0xNS45LDExLjMtMjMuOGMyLTQuMiwzLjktOC40LDUuOC0xMi42YzAuMy0xLDAuOS0yLDEuOC0yLjd2M2MwLDYzLjQsMCwxMjYuOSwwLDE5MC4zCglDMzg5LjksNTU4LjYsMzkwLjMsNTU5LjgsMzg5LjMsNTYwLjd6IiBzdHlsZT0iZmlsbDogI0UzMzkzNzsiLz4KPHBhdGggZD0iTTEzNC4xLDU2MC4zYzAuNi0wLjgsMS42LTAuNywyLjQtMC43aDU0LjNjMC40LDAsMC44LDAuMSwxLjIsMC4yYy0xLjEsMC40LTIuMiwwLjUtMy4zLDAuM2gtNTIKCUMxMzUuOSw1NjAuMiwxMzUsNTYwLjMsMTM0LjEsNTYwLjNMMTM0LjEsNTYwLjN6IiBzdHlsZT0iZmlsbDogI0U3NTg0MDsiLz4KPHBhdGggZD0iTTUyMC42LDEyNy45YzAuMS0wLjcsMC4zLTEuMywwLjctMS45YzQuMy04LjYsOC42LTE3LjIsMTIuOS0yNS44YzAuMi0wLjYsMC41LTEsMS0xLjRjMC4yLTAuMywwLjQtMC4zLDAuNiwwCgljLTQuNCw4LjktOC45LDE3LjctMTMuMywyNi42QzUyMiwxMjYuMyw1MjEuNywxMjcuNSw1MjAuNiwxMjcuOXoiIHN0eWxlPSJmaWxsOiAjRTA0NDM3OyIvPgo8cGF0aCBkPSJNNTM1LjcsOTguOWgtMC42YzEuMi0zLjYsMy4zLTYuOSw0LjktMTAuNGMwLjgtMS42LDEuMy0zLjQsMi42LTQuN2MwLjItMC4zLDAuNC0wLjMsMC42LDBMNTM1LjcsOTguOXoiIHN0eWxlPSJmaWxsOiAjRTI0ODM3OyIvPgo8cGF0aCBkPSJNNTQzLjMsODMuOGgtMC42YzEuOS00LjcsMy45LTkuMyw3LTEzLjRjMC4xLDAuNi0wLjEsMS4yLTAuMywxLjdDNTQ3LDc1LjgsNTQ1LjMsNzkuOSw1NDMuMyw4My44eiIgc3R5bGU9ImZpbGw6ICNFMzRDMzc7Ii8+CjxwYXRoIGQ9Ik01MTkuNSwxMzAuMmMtMC4yLTEsMC4zLTEuOSwxLjItMi4zQzUyMC42LDEyOC44LDUyMC4yLDEyOS43LDUxOS41LDEzMC4yeiIgc3R5bGU9ImZpbGw6ICNFMDQ0Mzc7Ii8+CjxwYXRoIGQ9Ik01MTguOSwxMzEuNWMtMC4xLTAuNSwwLjItMC45LDAuNi0xLjJDNTE5LjUsMTMwLjgsNTE5LjMsMTMxLjIsNTE4LjksMTMxLjV6IiBzdHlsZT0iZmlsbDogI0UwNDQzNzsiLz4KPHBhdGggZD0iTTUxOC4zLDEzMi42Yy0wLjEtMC41LDAuMi0wLjksMC42LTEuMkM1MTguOSwxMzEuOSw1MTguNywxMzIuMyw1MTguMywxMzIuNnoiIHN0eWxlPSJmaWxsOiAjRTA0NDM3OyIvPgo8L3N2Zz4K) */
export const UqcColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-uqc-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

UqcColorful.displayName = 'UqcColorful';