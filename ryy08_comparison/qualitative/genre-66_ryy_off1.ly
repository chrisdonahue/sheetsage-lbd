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
        
        bes'8 c''8. r2~ r8.~ | r1 | ees''8 des''16 c''16 c''8 r2~ r8~ | r2~ r8 c''16 bes'8 c''8. | bes'16 c''8 c''8 r2~ r8.~ | r1 | ees''16 f''8. f''8 ees''8 f''8 aes''8. r8.~ | r4 c''8. r16 ees''8 c''8 bes'8. c''16~ | c''8 r2~ r4.~ | r2. f''4
    }
}

>>

\version "2.18.2"