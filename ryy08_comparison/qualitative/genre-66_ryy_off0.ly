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
        
        bes'8 c''2~ c''4.~ | c''1 | ees''8 des''16 c''16 c''2.~ | c''2~ c''8 c''16 bes'8 c''8. | bes'16 c''8 c''2~ c''4~ c''16~ | c''1 | ees''16 f''8. f''8 ees''8 f''8 aes''4.~ | aes''4 c''4 ees''8 c''8 bes'8. c''16~ | c''1~ | c''2. f''4
    }
}

>>

\version "2.18.2"