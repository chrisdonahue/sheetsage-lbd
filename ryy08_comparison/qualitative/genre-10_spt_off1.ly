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
        
        r4 c''16 r16 c''4 r16 c''4 r16~ | r16 cis''8 r16 d''16 r16 cis''16 r16 d''8. cis''4 r16~ | r8. dis''4~ dis''8. r16 dis''16 r16 cis''8 r16~ | r16 e''2~ e''8 r4~ r16~ | r1~ | r4. dis''4~ dis''16 c''16 r16 cis''8 r16~ | r16 g'16 gis'4 r4. cis''8 r8~ | r2 dis''8. r4~ r16 | dis''4. r16 dis''8. r4 dis''8 | e''4~ e''16 r8 dis'8. r8. cis'16 r8~ | r16 d''16 r8 dis''4 r8 cis''8 r8 dis'16 r16~ | r16 e'2~ e'4~ e'16 r8~ | r8 dis''2~ dis''16 r4~ r16~ | r16 e'8. r8. dis''8 e''16 r16 d''16 r16 cis''8 r16
    }
}

>>

\version "2.18.2"