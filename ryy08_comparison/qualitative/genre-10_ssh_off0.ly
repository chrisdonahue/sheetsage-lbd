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
        
        r4 c''4 cis''8. c''4~ c''16~ | c''8 cis''8 cis''8 cis''8 e''4 c''4~ | c''8. dis''16 dis''8 dis''8 e''8 dis''16 dis''4~ dis''16 | e''1~ | e''1 | e''4. dis''8 dis''4 cis''4~ | cis''2. cis''8 e''8 | e''4. dis''8 dis''4 cis''4 | dis''8 dis''8 e''8 dis''8 dis''4. dis''8 | e''8 e''4 e''4. cis''4 | dis''8 e''4 e''4 cis''4 dis''8~ | dis''1 | dis''1 | e''4. dis''8 dis''4 cis''4
    }
}

>>

\version "2.18.2"