#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*48
    }
}

\new Staff { 
    {
        \clef treble
        \key bes \major
        \time 4/4
        
        r1~ | r1~ | r4~ r8. g'16 ges'8. r4~ r16
    }
}

>>

\version "2.18.2"