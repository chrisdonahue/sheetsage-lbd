#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*16
    }
}

\new Staff { 
    {
        \clef treble
        \key g \major
        \time 4/4
        
        r1
    }
}

>>

\version "2.18.2"