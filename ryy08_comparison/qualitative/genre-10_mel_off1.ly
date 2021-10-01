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
        
        r2 c''4~ c''8. r16~ | r8 c''16 cis''16 cis'''16 r16 a'8 d''8 c''4 r8~ | r8 dis''4. e''8. dis''8 r8. | e'''4. dis'''8 e'''8. r4~ r16~ | r2~ r4~ r8. d''16 | e''4~ e''16 r16 e''16 dis''8. r16 c''8 cis''8 r16~ | r16 gis'8 gis'4 r4~ r8. d''16 dis''16 | e''4~ e''16 r8 dis''4 r16 cis''8. ais'16 | r16 dis''2~ dis''16 r4. | e''4~ e''16 d''16 e''8 dis''8 e'8 c''8 r8~ | r8 e''8. r16 dis''8 a'16 r16 cis''8 c''16 dis''8. | d''16 r16 e''2~ e''4.~ | e''16 dis''2~ dis''8 r4~ r16 | e''4~ e''16 r8. d''16 r16 d''8 cis''8 r8
    }
}

>>

\version "2.18.2"