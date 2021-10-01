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
        
        d''16 e''4~ e''16 c''16 d''2~ d''16 | e''16 f''4~ f''16 d''16 e''8 c''8. d''16 e''8. | d''16 c''16 cis''8 dis''16 e''16 d''16 c''16 d''16 c''16 c''8 e''8 c''16 c''16~ | c''8 c''2~ c''8 e''16 d''16 c''8~ | c''1~ | c''1~ | c''1~ | c''2. e''16 d''16 d''16 c''16
    }
}

>>

\version "2.18.2"