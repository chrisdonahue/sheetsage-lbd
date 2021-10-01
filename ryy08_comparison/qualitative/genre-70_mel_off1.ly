#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*176
    }
}

\new Staff { 
    {
        \clef treble
        \key g \major
        \time 4/4
        
        r4~ r8. e'''8. g'''16 r4~ r16~ | r8 g''8. r16 e'''8. r8. a'8 gis'8 | r4. a''8 r4 a'4 | r2. d'8 r8 | c''16 r4 c''16 r8 c'8 r4. | g'4 r2~ r8. a'16~ | a'8. r2~ r16 a'8 r8 | g'8. r8. g'4. r4 | a8 r2~ r8 a8. r16 | g'8. r4~ r16 g8 r4. | a8 r8 e8 r4. a8. r16
    }
}

>>

\version "2.18.2"