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
        
        e''2~ e''8 g''8 d''8 e''8 | d''4. e''4 b'8 a'8 e''8 | a'4. a'4. fis''8 fis'8 | d''8 g'8 g''8 e''16 fis''16 g''8 g''16 a''16 g''8 d'''8 | e''2~ e''8 g''8 d''8 e''8 | d''4. e''8. d''16 b'4 a'8~ | a'4 a'4. a'8 fis''8 fis'8 | g'8 b'4. a''8. a''16 b'4 | a'4 a'4. a'8 fis''8 e''8 | g'4 g'8 g'4 g'16 a''16 b'8 a'8 | a'4 a'2 fis''8 e'8
    }
}

>>

\version "2.18.2"