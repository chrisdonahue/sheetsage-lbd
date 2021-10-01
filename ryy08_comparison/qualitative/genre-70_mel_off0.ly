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
        
        r4~ r8. e'''8. g'''4.~ | g'''8 g''4 e'''4. a'8 gis'8~ | gis'4. a''4. a'4~ | a'2. d'4 | c''4~ c''16 c''8. c'2 | g'2~ g'4~ g'8. a'16~ | a'2. a'4 | g'4. g'2~ g'8 | a2. a4 | g'2 g2 | a4 e2 a4
    }
}

>>

\version "2.18.2"