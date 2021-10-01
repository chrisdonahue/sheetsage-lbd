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
        
        r2~ r8 c''8 e''8 g''8 | c'''4. d''4. g''4 | a''2. f'4 | f'4 g'8 f'4 g'4. | e''2. f''8 g''8 | d'''4. c'''4. d''4 | a''1 | f8. g2 d8. e8 | ais16 b16 c'2~ c'8 d'16 b16 c'8
    }
}

>>

\version "2.18.2"