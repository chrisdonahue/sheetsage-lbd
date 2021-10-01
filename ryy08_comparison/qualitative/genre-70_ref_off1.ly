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
        
        e''2 e''16 fis''16 g''16 e''16 d''16 g''16 e''16 d''16 | g''8 g''4 e''16 g''16 e''16 d''16 b'8 a'16 b'16 g'16 e'16 | a'2 a'16 b'16 a'16 g'16 fis'16 d'16 e'16 fis'16 | g'4. e''16 fis''16 g''16 fis''16 g''16 a''16 g''8 d''8 | e''2 e''16 fis''16 g''16 e''16 d''16 g''16 e''16 d''16 | g''8 g''4 e''16 g''16 e''16 d''16 b'8 a'16 b'16 g'16 e'16 | a'2 a'16 b'16 a'16 g'16 fis'16 d'16 e'16 fis'16 | g'2 d'16 e'16 g'16 a'16 b'16 a'16 g'16 e'16 | a'2 a'16 b'16 a'16 g'16 fis'16 d'16 e'16 fis'16 | g'2 d'16 e'16 g'16 a'16 b'16 a'16 g'16 e'16 | a'2 a'16 b'16 a'16 g'16 fis'16 d'16 e'16 fis'16
    }
}

>>

\version "2.18.2"