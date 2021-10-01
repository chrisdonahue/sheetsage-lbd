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
        
        c4 r8 d'8 e'8 c''8 e''8 g''8 | c'''4. d''4. g''4 | a''4 f8 g8 a4 f'8 g'8 | a'4 g'8 f'4 g'8 r4 | c4. d'8 e'8 e''8 f''8 g''8 | f''4 g''8 c'''4. b''4 | a''4 f8 g8 a8 f''8 g''8 a''8~ | a''8. g8 c'8. b8. d8 e8. | g16 b16 c'2 b4 c'8
    }
}

>>

\version "2.18.2"