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
        
        bes'16 c''8. b'16 b'2~ b'8.~ | b'2~ b'8 a'8 e''8. ees''16~ | ees''8 c''2~ c''4.~ | c''8 bes'8 c''8 c''8. ees''16 c''8 b'8. a'16 | b'16 c''4 bes'2~ bes'8.~ | bes'1 | ees''16 f''8. f''8 ees''8 f''8 g''4.~ | g''4 b'8 b'8 ees''8 b'8 bes'8 c''8~ | c''1~ | c''2. f''4
    }
}

>>

\version "2.18.2"