#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*112
    }
}

\new Staff { 
    {
        \clef treble
        \key bes \major
        \time 4/4
        
        r1~ | r1~ | r4~ r8. g'16 ges'2~ | ges'1~ | ges'1~ | ges'1~ | ges'1
    }
}

>>

\version "2.18.2"