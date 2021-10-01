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
        
        c''1~ | c''2~ c''8 a'8 f''8 d''8 | ees''8 c''2~ c''4.~ | c''8 c''8 c''8 c''8 c''8 c''8 c''4 | c''1~ | c''1 | f''4 f''8 ees''8 f''8 g''4.~ | g''4 c''8 c''8 ees''8 c''8 bes'8 c''8~ | c''1~ | c''2. f''8 f''8
    }
}

>>

\version "2.18.2"