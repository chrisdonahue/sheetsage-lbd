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
        
        r8 c''8 c''8 c''8 dis''8. c''8. r8~ | r8 cis''8 cis''8 cis''8 e''8. cis''8. r8~ | r8 dis''8 dis''8 dis''8 e''8 dis''4 cis''8 | e''8. dis''2~ dis''16 r4~ | r1 | e''4. dis''4. cis''4 | gis'2 r8 gis'8 cis''8 dis''8 | e''4. dis''4. cis''4 | dis''2. r4 | e''4. dis''4. cis''4 | e''4. dis''4 cis''4 dis''8 | e''1 | dis''2. r4 | e''4. dis''4. cis''4
    }
}

>>

\version "2.18.2"