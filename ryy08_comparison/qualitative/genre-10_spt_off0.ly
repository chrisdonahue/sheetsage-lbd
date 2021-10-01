#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*224
    }
}

\new Staff { 
    {
        \clef treble
        \key cis \minor
        \time 4/4
        
        r4 c''8 c''4~ c''16 c''4~ c''16~ | c''16 cis''8. d''8 cis''8 d''8. cis''4~ cis''16~ | cis''8. dis''2 dis''8 cis''8.~ | cis''16 e''2~ e''4~ e''8.~ | e''1~ | e''4. dis''4~ dis''16 c''8 cis''8.~ | cis''16 g'16 gis'2~ gis'8 cis''4~ | cis''2 dis''2 | dis''4~ dis''8. dis''4~ dis''8. dis''8 | e''4~ e''8. dis'4. cis'8.~ | cis'16 d''8. dis''4. cis''4 dis'8~ | dis'16 e'2~ e'4~ e'8.~ | e'8 dis''2~ dis''4.~ | dis''16 e'4. dis''8 e''8 d''8 cis''8.
    }
}

>>

\version "2.18.2"