#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*144
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        r1~ | r1~ | r1~ | r1~ | r1~ | r1~ | r1~ | r1 | b8 c'2 b4 c'8
    }
}

>>

\version "2.18.2"