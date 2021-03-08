// type SingleVideoBackgroundProps = SingleContainerProps & {
//   src?: string
//   height: number | string
//   useRef?: any
// import React from 'react'
// import { singleOf } from '../helpers/createSingle'
// import { SingleBackground } from './Background'
// }
// export const SingleVideoBackground = (p: SingleVideoBackgroundProps) => {
//   const { src, useRef, ...props } = p
//   return (
//     <SingleContainer
//       style={{ position: 'relative', overflow: 'hidden', height: props.height }}
//       className={cx('video-background', p.className)}
//     >
//       <SingleContainer
//         {...props}
//         className="video-background__text"
//         style={{
//           position: 'absolute',
//           zIndex: 2,
//           top: 0,
//           width: '100%',
//           height: props.height,
//           ...props.style,
//         }}
//       >
//         {p.children}
//       </SingleContainer>
//       <StyleInjector
//         classNamePrefix="video-background__video"
//         style={{
//           position: 'absolute',
//           zIndex: 1,
//           objectFit: 'cover',
//           top: 0,
//           left: '50%',
//           transform: 'translateX(-50%)',
//           height: props.height,
//           width: props.width,
//         }}
//       >
//         {className => (
//           <video className={className} autoPlay muted src={src} ref={useRef} />
//         )}
//       </StyleInjector>
//     </SingleContainer>
//   )
// }
