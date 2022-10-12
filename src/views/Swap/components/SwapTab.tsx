import { useState } from 'react'
import styled from 'styled-components'
import useTheme from 'hooks/useTheme'
import { ButtonMenu, ButtonMenuItem } from '@unitedfarmers/uikit'
import { useTranslation } from '@unitedfarmers/localization'
import replaceBrowserHistory from '@unitedfarmers/utils/replaceBrowserHistory'

export enum SwapType {
  SWAP,
  STABLE_SWAP,
}

const Wrapper = styled.div`
  & > div {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.input};
    border: 0;
  }
  & button {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.input};
    border-radius: 20px 20px 0 0;
  }
`

export default function SwapTab({ children, showStable }) {
  const { t } = useTranslation()
  const [swapTypeState, setSwapType] = useState(SwapType.SWAP)
  const { theme } = useTheme()

  if (showStable) {
    return (
      <>
        <Wrapper>
          <ButtonMenu
            activeIndex={swapTypeState}
            onItemClick={() => {
              setSwapType((state) => (state === SwapType.SWAP ? SwapType.STABLE_SWAP : SwapType.SWAP))
              replaceBrowserHistory('inputCurrency', null)
              replaceBrowserHistory('outputCurrency', null)
            }}
          >
            {[t('Swap'), t('StableSwap')].map((content, idx) => (
              <ButtonMenuItem
                key={content}
                style={{
                  color: idx === swapTypeState ? theme.colors.text : theme.colors.textSubtle,
                  backgroundColor: idx === swapTypeState ? theme.card.background : theme.colors.input,
                }}
              >
                {content}
              </ButtonMenuItem>
            ))}
          </ButtonMenu>
        </Wrapper>
        {children(swapTypeState)}
      </>
    )
  }

  return children(SwapType.SWAP)
}
