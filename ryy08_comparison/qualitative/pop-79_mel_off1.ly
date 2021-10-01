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
        
        r2~ r8 c''8 e''8 g''8 | c'''16 r4~ r16 d''8 r4 g''8. r16 | a''4 r2 f'8 r8 | f'8 r8 g'8 f'8. r16 g'8 r4 | e''8 r2~ r8 f''8 g''8 | d'''8 r4 c'''16 r4~ r16 d''8 r8 | a''8. r2~ r4~ r16 | f8. g2 d8. e8 | ais16 b16 c'2~ c'8 d'16 b16 c'8
    }
}

>>

\version "2.18.2"