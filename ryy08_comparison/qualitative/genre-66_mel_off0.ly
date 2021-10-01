#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*160
    }
}

\new Staff { 
    {
        \clef treble
        \key c \minor
        \time 4/4
        
        bes'8 c''2~ c''4. | c'4 c''2 e''8 b'8 | ees''16 c''2~ c''16 c'8 ees'4~ | ees'8 a'16 bes'16 c''4~ c''16 des''16 c''4~ c''16 a'16 | bes'16 c''8. ees''8 c'2~ c'8 | c'4 ees''2 f'4 | ees''16 f''8. f''8 ees''8 f''8 ges''8 d''8 g'8~ | g'4 b'4 ees''4 bes'8 c''8~ | c''4 ees''8 c'4 c''4.~ | c''2. e'''4
    }
}

>>

\version "2.18.2"