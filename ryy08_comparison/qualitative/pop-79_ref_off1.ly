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
        
        e''2 r8 c''8 e''8 g''8 | c'''4. b''4. g''4 | a''4 r4. c'8 f'8 g'8 | a'4 g'8 f'4 g'4. | e''2 r8 e''8 f''8 g''8 | d'''4. c'''4. b''4 | a''4 r4. f''8 g''8 a''8 | a''2 g''2 | c'2 r8 b4 c'8
    }
}

>>

\version "2.18.2"