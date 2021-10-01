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
        
        g''4. f''4~ f''16 e''8. d''8~ | d''8 c''4 d''4 e''4. | g''4 f''16 g''16 f''4 e''8. d''8.~ | d''8 cis''4~ cis''16 d''4~ d''16 e''8 d''8 | c''4. b'8 c''8 c''8 d''8. e''16 | d''8 c''4 r4 b'16 d''8. e''8 | e''16 f''8 e''16 d''16 c''16 c''16 d''4~ d''16 f''8. g''16 | a''8 g''16 g''16 f''8 e''8 f''8 e''4 d''16 e''16
    }
}

>>

\version "2.18.2"