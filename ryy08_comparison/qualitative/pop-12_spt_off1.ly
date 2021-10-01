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
        
        g''8. r16 fis''8 f''4 e''4 d''8~ | d''16 r16 c''4 d''4 e''4 r8~ | r16 g''4~ g''16 r16 f''8. e''8. d''16 d''8~ | d''16 cis''4~ cis''16 d''4~ d''16 e''8. d''16 r16 | c''8. r16 cis''16 r16 c''8. r16 c''16 r16 d''16 r16 d''8~ | d''16 r16 c''8. r4~ r16 b'16 d''8. e''16 r16 | e''4 cis''16 r8 d''8. cis''16 r16 cis''8 r8~ | r2~ r8 e''8. r16 e''8
    }
}

>>

\version "2.18.2"