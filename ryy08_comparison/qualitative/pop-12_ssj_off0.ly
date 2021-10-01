#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*128
    }
}

\new Staff { 
    {
        \clef treble
        \key c \major
        \time 4/4
        
        g''4 g''8 f''4 e''4 d''8~ | d''8 c''4 d''4 e''4. | g''4 g''8 f''4 e''4 d''8~ | d''8 c''4 d''4 e''4 d''8 | c''4. c''8 c''8 c''8 d''8 d''8 | d''8 c''2 d''4 e''8 | f''8 e''8 d''8 d''16 d''2~ d''16 | a''8 b''8 f''8 e''4 e''8 e''8 e''8
    }
}

>>

\version "2.18.2"