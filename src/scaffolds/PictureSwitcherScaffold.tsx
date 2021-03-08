// // TODO: 控制器可以定制
// // TODO: 控制内容
// // TODO: 切换的效果

// // import './PictureSwitcherScaffold.less'
// import Color from 'color-js'
// import React, { useState } from 'react'
// import cx from 'classnames'

// import { ResponsiveContainer } from '../bases/Container'
// import { ResponsiveFlex, SingleFlex } from '../bases/Flex'
// import { ResponsiveText } from '../bases/Text'
// import { LayoutProps } from '../bases/Layout'
// import { ResponsiveBackground } from '../extends/Background'
// import { ResponsiveContent } from '../extends/Content'
// import { RSProperty } from '../interfaces'

// export interface PictureSwitcherProps {
//   'title'?: React.ReactChild
//   'subTitle'?: React.ReactChild
//   'items': { lg: string; xs: string }[]
//   'controllers'?: any[]
//   'padding'?: RSProperty<string>
//   'descs'?: any[]
//   'layout'?: RSProperty<LayoutProps>
//   'contrastingColor'?: string
//   'height'?: RSProperty<string | number>
//   'animated'?: boolean
//   'background'?: string
//   'data-screen': string
// }

// const Controller: React.FC<{
//   value: number
//   isActive: boolean
//   onChange: (currentIndex: number, style: React.CSSProperties) => void
// }> = props => {
//   const isActive = props.isActive
//   const currentRef = React.useRef<HTMLSpanElement>(null)

//   // useMount(() => {
//   //   setTimeout(() => {
//   //     const currentRect = currentRef.current?.getBoundingClientRect()
//   //     if (currentRect?.width && props.value === 0) {
//   //       props.onChange(props.value, { width: currentRect?.width, left: 0 })
//   //     }
//   //   }, 10)
//   // })

//   return (
//     <span
//       ref={currentRef}
//       className={cx('text', {
//         'alibaba-puhuiti-medium is-active': isActive,
//         'alibaba-puhuiti-regular is-disabled': !isActive,
//       })}
//       onClick={e => {
//         const control = e.currentTarget
//         props.onChange(props.value, {
//           width: control?.getBoundingClientRect().width,
//           left: control?.offsetLeft,
//         })
//       }}
//     >
//       {props.children}
//     </span>
//   )
// }

// const PictureSwitcherScaffold: React.FC<PictureSwitcherProps> = props => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>()
//   const primaryColor = props.contrastingColor ?? '#222'
//   return (
//     <>
//       <ResponsiveContainer
//         data-screen={props['data-screen']}
//         className="picture-switcher"
//         height={props.height}
//         style={{
//           position: 'relative',
//           overflow: 'hidden',
//           background: props.background,
//         }}
//       >
//         {props.items.map((url, index) => (
//           <div
//             key={index}
//             style={{
//               position: 'absolute',
//               top: 0,
//               zIndex: 1,
//               width: '100%',
//               opacity: index === currentIndex ? 1 : 0,
//               transitionDuration: props.animated ? '500ms' : '0',
//               transitionProperty: 'opacity',
//             }}
//           >
//             <ResponsiveBackground src={url} height={props.height} />
//           </div>
//         ))}
//         <div
//           style={{
//             position: 'absolute',
//             zIndex: 1,
//             width: '100%',
//             height: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//           }}
//         >
//           <ResponsiveContent
//             contrastingColor={primaryColor}
//             height="100%"
//             padding={props.padding}
//           >
//             <ResponsiveFlex layout={props.layout}>
//               <ResponsiveFlex
//                 expanded
//                 style={{
//                   lg: { width: 425, whiteSpace: 'nowrap' },
//                   xs: { width: 335, whiteSpace: 'nowrap' },
//                 }}
//                 justify={{ lg: 'center' }}
//                 direction="column"
//               >
//                 <div className="title">{props.title}</div>
//                 {props.subTitle && <div className="desc">{props.subTitle}</div>}
//                 <ResponsiveContainer height={{ lg: 40, xs: 21 }} />
//                 <ResponsiveContainer width={{ lg: '100%', xs: 260 }}>
//                   <SingleFlex
//                     className="picture-switcher__controllers"
//                     justify="space-between"
//                     style={{ position: 'relative' }}
//                   >
//                     {props.controllers?.map((text, index) => (
//                       <Controller
//                         isActive={currentIndex === index}
//                         onChange={(i, style) => {
//                           setCurrentIndex(i)
//                           setUnderlineStyle(style)
//                         }}
//                         key={index}
//                         value={index}
//                       >
//                         <ResponsiveText fontSize={{ lg: 24, xs: 18 }}>
//                           {text}
//                         </ResponsiveText>
//                       </Controller>
//                     ))}
//                   </SingleFlex>
//                   <div
//                     className="picture-switcher__underline"
//                     style={{
//                       backgroundColor: Color(primaryColor)
//                         .setAlpha(0.5)
//                         .toString(),
//                       position: 'relative',
//                     }}
//                   >
//                     <ResponsiveContainer
//                       background={primaryColor}
//                       className="picture-switcher__underline-activetity"
//                       style={underlineStyle}
//                     />
//                   </div>
//                 </ResponsiveContainer>
//                 {props.descs?.length !== 0 && (
//                   <>
//                     <ResponsiveContainer height={{ lg: 20, xs: 15 }} />
//                     <ResponsiveText fontSize={{ lg: 20, xs: 14 }}>
//                       {props.descs?.[currentIndex]}
//                     </ResponsiveText>
//                   </>
//                 )}
//               </ResponsiveFlex>
//             </ResponsiveFlex>
//           </ResponsiveContent>
//         </div>
//       </ResponsiveContainer>
//     </>
//   )
// }

// export default PictureSwitcherScaffold
