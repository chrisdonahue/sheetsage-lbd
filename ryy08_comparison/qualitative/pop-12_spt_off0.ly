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
        
        g''4 fis''8 f''4 e''4 d''8~ | d''8 c''4 d''4 e''4.~ | e''16 g''4. f''8. e''8. d''16 d''8~ | d''16 cis''4~ cis''16 d''4~ d''16 e''8. d''8 | c''4 cis''8 c''4 c''8 d''8 d''8~ | d''8 c''2 b'16 d''8. e''8 | e''4 cis''8. d''8. cis''8 cis''4~ | cis''2~ cis''8 e''4 e''8
    }
}

>>

\version "2.18.2"