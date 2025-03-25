'use client'

import Header from './header'
import { motion } from 'framer-motion'
import React from 'react'
// import { useGlobalState } from '@/lib/globalState'
import Script from 'next/script'
import { PlayIcon } from 'lucide-react'

// import TestimonialsAvatars from "./TestimonialsAvatars";
// import config from "@/config";

interface StepItemProps {
  number: number
  title: string
  description: string
  delay: number
  logo?: React.ReactNode
}

const StepItem: React.FC<StepItemProps> = ({
  number,
  title,
  description,
  delay,
  logo,
}) => {
  return (
    <motion.g
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <svg
        width="466"
        height="137"
        viewBox="0 0 466 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`cardGradient-${number}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="var(--color-base-300)" />
            <stop offset="100%" stopColor="var(--color-base-200)" />
          </linearGradient>
          <filter
            id={`glow-${number}`}
            x="-10%"
            y="-10%"
            width="120%"
            height="120%"
          >
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g filter="url(#filter0_d_13_929)">
          <path
            d="M12.368 16.3512C12.368 7.51464 19.5315 0.351196 28.368 0.351196H437.316C446.152 0.351196 453.316 7.51464 453.316 16.3512V96.3512C453.316 105.188 446.152 112.351 437.316 112.351H28.3681C19.5315 112.351 12.368 105.188 12.368 96.3512V16.3512Z"
            fill={`url(#cardGradient-${number})`}
          />
          <path
            d="M28.368 0.851196H437.316C445.876 0.851196 452.816 7.79078 452.816 16.3512V96.3512C452.816 104.912 445.876 111.851 437.316 111.851H28.3681C19.8076 111.851 12.868 104.912 12.868 96.3512V16.3512C12.868 7.79078 19.8076 0.851196 28.368 0.851196Z"
            stroke="var(--color-primary)"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          />

          {/* Number indicator */}
          <circle
            cx="38"
            cy="24"
            r="16"
            fill="var(--color-primary)"
            fillOpacity="0.1"
          />
          <text
            x="38"
            y="30"
            textAnchor="middle"
            fill="var(--color-primary)"
            fontWeight="bold"
            fontSize="16"
          >
            {number}
          </text>
        </g>

        <foreignObject x="20" y="24" width="426" height="97">
          <div
            // xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: '100%',
              height: '100%',
              paddingLeft: '36px',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--color-base-200)',
                borderRadius: '12px',
                boxShadow:
                  '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
                padding: '8px',
                marginRight: '24px',
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 60 60"
                filter={`url(#glow-${number})`}
              >
                {logo}
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  color: 'var(--color-base-content)',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </div>
              <div
                style={{
                  color: 'var(--color-base-content)',
                  opacity: 0.7,
                  fontSize: '15px',
                  fontWeight: '500',
                  lineHeight: '1.4',
                }}
              >
                {description}
              </div>
            </div>
          </div>
        </foreignObject>

        <defs>
          <filter
            id="filter0_d_13_929"
            x="0.368042"
            y="0.351196"
            width="464.948"
            height="136"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="4"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_13_929"
            />
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="8" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_13_929"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_13_929"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </motion.g>
  )
}

const StepsAnimation = () => {
  const steps = [
    {
      number: 1,
      title: 'Design in Figma',
      description: 'Create your design in Figma',
      logo: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3521 20.7397C20.3521 17.9783 22.5906 15.7397 25.3521 15.7397C28.1135 15.7397 30.3521 17.9783 30.3521 20.7397C30.3521 23.5012 28.1135 25.7397 25.3521 25.7397C22.5906 25.7397 20.3521 23.5012 20.3521 20.7397Z"
            fill="#1ABCFE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3521 30.7397C10.3521 27.9783 12.5906 25.7397 15.3521 25.7397H20.3521V30.7397C20.3521 33.5012 18.1135 35.7397 15.3521 35.7397C12.5906 35.7397 10.3521 33.5012 10.3521 30.7397Z"
            fill="#0ACF83"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.3521 5.73975V15.7397H25.3521C28.1135 15.7397 30.3521 13.5012 30.3521 10.7397C30.3521 7.97832 28.1135 5.73975 25.3521 5.73975H20.3521Z"
            fill="#FF7262"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3521 10.7397C10.3521 13.5012 12.5906 15.7397 15.3521 15.7397H20.3521V5.73975H15.3521C12.5906 5.73975 10.3521 7.97832 10.3521 10.7397Z"
            fill="#F24E1E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3521 20.7397C10.3521 23.5012 12.5906 25.7397 15.3521 25.7397H20.3521V15.7397H15.3521C12.5906 15.7397 10.3521 17.9783 10.3521 20.7397Z"
            fill="#A259FF"
          />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Convert with Transform',
      description: 'Convert your Figma designs to Bubble',
      logo: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="41" height="41" fill="#4192F3" />
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.30894 23.621C8.98204 24.3379 8.94338 25.4614 8.22258 26.1303L8.18567 26.1646C7.46487 26.8335 6.33489 26.7946 5.66178 26.0777C4.98868 25.3608 5.02734 24.2373 5.74813 23.5684L5.78505 23.5341C6.50585 22.8652 7.63583 22.9041 8.30894 23.621Z"
            fill="white"
          />
          <path
            opacity="0.9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6807 24.4439C17.3525 25.162 17.3118 26.2854 16.5898 26.9531L11.4779 31.6802C10.7559 32.3479 9.62594 32.307 8.95413 31.5888C8.28232 30.8707 8.32301 29.7473 9.04502 29.0797L14.157 24.3525C14.879 23.6849 16.0089 23.7258 16.6807 24.4439Z"
            fill="white"
          />
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.1002 33.1052C23.675 32.3086 24.7907 32.1264 25.5921 32.6982L25.6967 32.7729C26.4981 33.3447 26.6818 34.4539 26.107 35.2505C25.5322 36.047 24.4166 36.2293 23.6152 35.6575L23.5106 35.5828C22.7092 35.011 22.5255 33.9018 23.1002 33.1052Z"
            fill="white"
          />
          <path
            opacity="0.9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.1895 24.4392C35.8626 25.1561 35.824 26.2796 35.1032 26.9485L32.593 29.2781C31.8722 29.9471 30.7422 29.9082 30.0691 29.1913C29.396 28.4744 29.4347 27.351 30.1555 26.682L32.6656 24.3524C33.3864 23.6834 34.5164 23.7223 35.1895 24.4392Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.5323 15.5155C36.2054 16.2324 36.1668 17.3558 35.446 18.0248L16.8967 35.24C16.1759 35.909 15.0459 35.8701 14.3728 35.1532C13.6997 34.4363 13.7383 33.3128 14.4591 32.6439L33.0084 15.4286C33.7292 14.7597 34.8592 14.7986 35.5323 15.5155Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.269 9.94813C32.9421 10.665 32.9034 11.7885 32.1827 12.4574L21.5145 22.3583C20.7937 23.0273 19.6637 22.9884 18.9906 22.2715C18.3175 21.5546 18.3561 20.4312 19.0769 19.7622L29.7451 9.8613C30.4659 9.19235 31.5959 9.23122 32.269 9.94813Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.0056 6.2501C27.6792 6.96655 27.6413 8.09004 26.9209 8.75947L13.2068 21.5045C12.4864 22.1739 11.3564 22.1358 10.6828 21.4194C10.0092 20.7029 10.0471 19.5794 10.7675 18.91L24.4816 6.16496C25.202 5.49552 26.332 5.53364 27.0056 6.2501Z"
            fill="white"
          />
          <path
            opacity="0.9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7282 10.0242C14.4001 10.7422 14.3595 11.8656 13.6375 12.5333L8.26715 17.5003C7.54521 18.168 6.41529 18.1272 5.74342 17.4091C5.07155 16.6911 5.11214 15.5677 5.83409 14.9L11.2045 9.93301C11.9264 9.26529 13.0563 9.3061 13.7282 10.0242Z"
            fill="white"
          />
          <path
            opacity="0.8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.0845 4.99841C18.0701 5.03232 18.8418 5.85421 18.8081 6.83416L18.802 7.01159C18.7683 7.99154 17.9419 8.75846 16.9563 8.72455C15.9706 8.69064 15.1989 7.86875 15.2327 6.8888L15.2388 6.71137C15.2725 5.73142 16.0988 4.9645 17.0845 4.99841Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Use in Bubble',
      description: 'Paste frames into your Bubble app',
      logo: (
        <svg
          width="55"
          height="55"
          viewBox="0 0 256 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M156.688 71.5306C131.928 71.5306 107.524 82.1604 88.893 103.059V0H52.0239V173.506C52.0239 173.51 52.0239 173.514 52.0239 173.519C52.0239 229.845 97.6851 275.507 154.012 275.507C210.338 275.507 256 229.845 256 173.519C256 117.193 213.014 71.5306 156.688 71.5306ZM154.012 236.225C119.38 236.225 91.3051 208.15 91.3051 173.519C91.3051 138.887 119.38 110.812 154.012 110.812C188.643 110.812 216.718 138.887 216.718 173.519C216.718 208.151 188.643 236.225 154.012 236.225Z"
            fill="#262626"
          />
          <path
            d="M25.2199 225.066C11.291 225.066 0 236.358 0 250.286C0 264.214 11.291 275.506 25.2199 275.506C39.1489 275.506 50.4399 264.214 50.4399 250.286C50.4399 236.358 39.1489 225.066 25.2199 225.066Z"
            fill="#0000FF"
          />
        </svg>
      ),
    },
  ]

  const getStepPosition = (index: number) => {
    const baseX = index % 2 === 0 ? -40 : 40
    return {
      x: baseX,
      y: index * 220,
      rotate: index % 2 === 0 ? -2 : 2,
    }
  }

  const getArrowPosition = (index: number) => {
    const baseX = index % 2 === 0 ? 200 : 50
    const baseY = getStepPosition(index).y + 120

    // Adjust these offsets to fine-tune the position
    const xOffset = index % 2 === 0 ? -10 : 10 // Move left or right
    const yOffset = -10 // Move up

    return `translate(${baseX + xOffset}, ${baseY + yOffset})`
  }

  const Arrow = ({ isRight, delay }: { isRight: boolean; delay: number }) => (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      transform={isRight ? 'scale(0.8, 0.8)' : 'scale(-0.8, 0.8)'}
    >
      <motion.path
        d="M18.5819 17.6062C17.773 17.7852 16.9722 17.2746 16.7931 16.4658C16.6141 15.6569 17.1246 14.8561 17.9335 14.6771L18.5819 17.6062ZM81.5464 52.7571L80.2295 53.4752L80.2295 53.4752L81.5464 52.7571ZM82.9103 115.868C82.5241 116.6 81.6169 116.881 80.884 116.495C80.1511 116.109 79.87 115.202 80.2562 114.469L82.9103 115.868ZM77.3942 98.873C77.3088 98.049 77.9076 97.3118 78.7316 97.2264C79.5556 97.141 80.2929 97.7398 80.3783 98.5638L77.3942 98.873ZM80.6813 116.04L80.9908 117.507C80.5749 117.595 80.1413 117.502 79.7978 117.252C79.4542 117.001 79.2331 116.617 79.1893 116.194L80.6813 116.04ZM95.4108 111.4C96.2214 111.229 97.0171 111.748 97.188 112.558C97.359 113.369 96.8405 114.164 96.0299 114.335L95.4108 111.4ZM18.2577 16.1416C17.9335 14.6771 17.9345 14.6768 17.9357 14.6766C17.9363 14.6764 17.9377 14.6761 17.9388 14.6759C17.9412 14.6754 17.9442 14.6747 17.9477 14.6739C17.9548 14.6724 17.9643 14.6704 17.9761 14.6679C17.9997 14.6629 18.0325 14.6561 18.0745 14.6477C18.1585 14.6309 18.2789 14.6076 18.4341 14.5799C18.7445 14.5245 19.1944 14.451 19.7707 14.375C20.9232 14.223 22.5832 14.0604 24.6468 14.0108C28.7722 13.9116 34.5242 14.2636 41.0636 16.0634C54.1872 19.6754 70.3472 29.0845 82.8634 52.039L80.2295 53.4752C68.1149 31.2572 52.6306 22.3585 40.2675 18.9559C34.0635 17.2484 28.6116 16.9163 24.7189 17.01C22.7735 17.0567 21.2209 17.2098 20.163 17.3493C19.6342 17.419 19.2295 17.4853 18.9616 17.5332C18.8276 17.5571 18.728 17.5764 18.6641 17.5892C18.6322 17.5956 18.6093 17.6003 18.5955 17.6033C18.5886 17.6047 18.584 17.6057 18.5817 17.6062C18.5806 17.6064 18.58 17.6066 18.58 17.6066C18.58 17.6066 18.5805 17.6065 18.5805 17.6065C18.5811 17.6063 18.5819 17.6062 18.2577 16.1416ZM82.8634 52.039C91.4489 67.7844 91.4422 83.7615 89.3207 95.7393C88.2593 101.732 86.6654 106.745 85.3352 110.265C84.6697 112.026 84.0692 113.416 83.6324 114.37C83.414 114.847 83.2364 115.216 83.112 115.468C83.0497 115.595 83.0008 115.691 82.9667 115.758C82.9496 115.792 82.9363 115.818 82.9268 115.836C82.9221 115.845 82.9183 115.852 82.9156 115.858C82.9142 115.86 82.913 115.862 82.9122 115.864C82.9117 115.865 82.9113 115.866 82.911 115.866C82.9106 115.867 82.9103 115.868 81.5833 115.168C80.2562 114.469 80.256 114.469 80.2559 114.47C80.2559 114.47 80.2558 114.47 80.2559 114.47C80.256 114.469 80.2564 114.469 80.257 114.467C80.2583 114.465 80.2606 114.461 80.2638 114.454C80.2703 114.442 80.2806 114.422 80.2947 114.394C80.3228 114.339 80.3656 114.255 80.4216 114.141C80.5338 113.914 80.6988 113.571 80.9044 113.122C81.3159 112.223 81.8898 110.896 82.5289 109.204C83.808 105.82 85.3443 100.988 86.3667 95.2161C88.4126 83.665 88.3875 68.4365 80.2295 53.4752L82.8634 52.039ZM80.3783 98.5638L82.1733 115.885L79.1893 116.194L77.3942 98.873L80.3783 98.5638ZM80.3717 114.572L95.4108 111.4L96.0299 114.335L80.9908 117.507L80.3717 114.572Z"
        fill="var(--color-primary)"
        fillOpacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: delay + 0.5 }}
      />
    </motion.g>
  )

  return (
    <div className="overflow-hidden lg:w-full">
      <svg
        className="pointer-events-none h-full w-full"
        viewBox="-50 -50 600 640"
      >
        {steps.map((step, index) => {
          const { x, y, rotate } = getStepPosition(index)
          return (
            <React.Fragment key={step.number}>
              <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
                <StepItem
                  logo={step.logo}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.3 + 0.3}
                />
              </g>
              {index < steps.length - 1 && (
                <g transform={getArrowPosition(index)}>
                  <Arrow isRight={index % 2 === 0} delay={index * 0.3} />
                </g>
              )}
            </React.Fragment>
          )
        })}
      </svg>
    </div>
  )
}

export const WistiaPopover = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script
        src="https://fast.wistia.com/embed/medias/2vetx2vwux.jsonp"
        strategy="lazyOnload"
      />
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
      <span
        className="wistia_embed wistia_async_2vetx2vwux popover=true popoverContent=link videoFoam=false"
        style={{ display: 'inline', position: 'relative' }}
      >
        {children}
      </span>
    </>
  )
}

const Hero = () => {
  //   const { setShowAuthModal } = useGlobalState()
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1512' height='944' viewBox='0 0 1512 944' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask id='mask0' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='129' y='-496' width='1440' height='1440'%3E%3Crect width='1440' height='1440' transform='translate(129 -496)' fill='url(%23paint0_radial)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0)'%3E%3Cg clip-path='url(%23clip0)'%3E%3Cg clip-path='url(%23clip1)'%3E%3Cline x1='177.5' y1='-496' x2='177.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='273.5' y1='-496' x2='273.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='369.5' y1='-496' x2='369.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='465.5' y1='-496' x2='465.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='561.5' y1='-496' x2='561.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='657.5' y1='-496' x2='657.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='753.5' y1='-496' x2='753.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='849.5' y1='-496' x2='849.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='945.5' y1='-496' x2='945.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='1041.5' y1='-496' x2='1041.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='1137.5' y1='-496' x2='1137.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='1233.5' y1='-496' x2='1233.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='1329.5' y1='-496' x2='1329.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='1425.5' y1='-496' x2='1425.5' y2='944' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3C/g%3E%3Cg clip-path='url(%23clip2)'%3E%3Cline x1='-111' y1='79.5' x2='1809' y2='79.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='175.5' x2='1809' y2='175.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='271.5' x2='1809' y2='271.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='367.5' x2='1809' y2='367.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='463.5' x2='1809' y2='463.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='559.5' x2='1809' y2='559.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='655.5' x2='1809' y2='655.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='751.5' x2='1809' y2='751.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3Cline x1='-111' y1='847.5' x2='1809' y2='847.5' stroke='%23D0D5DD' stroke-opacity='0.3'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint0_radial' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(720 -0.000171661) rotate(90) scale(1440 751.588)'%3E%3Cstop/%3E%3Cstop offset='0.953125' stop-opacity='0'/%3E%3C/radialGradient%3E%3CclipPath id='clip0'%3E%3Crect width='1920' height='1440' fill='white' transform='translate(-111 -496)'/%3E%3C/clipPath%3E%3CclipPath id='clip1'%3E%3Crect width='1920' height='1440' fill='white' transform='translate(-111 -496)'/%3E%3C/clipPath%3E%3CclipPath id='clip2'%3E%3Crect width='1920' height='1440' fill='white' transform='translate(-111 -496)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'var(--color-base-200)',
      }}
      className="w-full"
    >
      {/* <Header /> */}
      <section className="mx-auto max-w-[1400px] px-8 py-8 lg:py-20">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center">
          {/* Left side - Text and buttons */}
          <div className="mb-16 flex max-w-xl flex-col gap-6 text-center lg:mb-0 lg:text-left">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold tracking-tight md:-mb-3 lg:text-6xl">
                Fixed{' '}
                <span className="text-primary font-extrabold italic">
                  Price
                </span>
                <br />
                <span className="text-secondary relative font-extrabold italic">
                  MVP{' '}
                  <svg
                    className="fill-secondary absolute -top-0 -left-1 h-3.5 w-3.5 md:h-5 md:w-5"
                    viewBox="0 0 68 74"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.4259 68.5278C16.0259 66.7318 9.32534 65.8258 2.82534 64.9958C1.42534 64.8218 0.125535 65.7928 0.0255346 67.1608C-0.174465 68.5298 0.826121 69.7818 2.12612 69.9557C8.42612 70.7548 14.9255 71.6097 21.0255 73.3387C22.3255 73.7137 23.7261 72.9418 24.1261 71.6138C24.5261 70.2868 23.7259 68.9038 22.4259 68.5278Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M41.8251 43.0648C31.5251 32.5538 19.9251 23.3958 9.8251 12.6028C8.9251 11.5948 7.3251 11.5408 6.3251 12.4818C5.3251 13.4238 5.22549 15.0078 6.22549 16.0158C16.3255 26.8398 27.9255 36.0278 38.2255 46.5698C39.2255 47.5538 40.8251 47.5678 41.8251 46.5998C42.7251 45.6328 42.8251 44.0488 41.8251 43.0648Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M61.1264 2.63576C61.4264 8.65176 61.7259 14.6678 62.0259 20.6848C62.0259 22.0628 63.2264 23.1268 64.6264 23.0598C66.0264 22.9918 67.0259 21.8188 67.0259 20.4398C66.7259 14.4138 66.4264 8.38876 66.1264 2.36376C66.0264 0.985757 64.8262 -0.0712432 63.4262 0.00375683C62.1262 0.0787568 61.0264 1.25876 61.1264 2.63576Z"
                    ></path>
                  </svg>
                </span>
                development that Scale!
                <br />
              </h1>
              <p className="text-lg leading-relaxed opacity-80">
                Launch in 3 weeks with scalable code that grows with your
                business
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-4 md:flex-row lg:justify-start">
              <button
                onClick={() => {}}
                className="btn btn-primary btn-wide group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rocket h-5 w-5 transition-transform duration-200 group-hover:scale-110 group-hover:-rotate-3"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
                Start for free
              </button>
              <button className="btn btn-wide flex items-center justify-center">
                <span className="flex gap-2">
                  <PlayIcon className="h-4 w-4" /> Watch Demo
                </span>
              </button>
            </div>

            {/* Tech Stack Logos */}
            <div className="mt-8 flex flex-col items-center lg:items-start">
              <p className="mb-3 text-sm font-medium opacity-70">
                Built with modern tech stack
              </p>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-5 lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="tech-logo-item">
                  <img
                    src="/tools/next-js.svg"
                    alt="Next.js"
                    className="h-8 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="tech-logo-item">
                  <img
                    src="/tools/supabase.svg"
                    alt="Supabase"
                    className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="tech-logo-item">
                  <img
                    src="/tools/vercel.svg"
                    alt="Vercel"
                    className="h-6 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="tech-logo-item">
                  <img
                    src="/tools/figma.png"
                    alt="Figma"
                    className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="tech-logo-item">
                  <img
                    src="/tools/GPT-4.png"
                    alt="GPT-4"
                    className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="tech-logo-item">
                  <img
                    src="/tools/claude-3.5.png"
                    alt="Claude 3.5"
                    className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
              </motion.div>
            </div>

            {/* <TestimonialsAvatars priority={true} /> */}
          </div>

          {/* Right side - Animation */}
          <div className="relative z-0 w-full max-w-md lg:ml-12 lg:max-w-[480px] xl:max-w-[550px]">
            <StepsAnimation />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
