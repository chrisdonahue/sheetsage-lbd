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
        
        r2 c''2~ | c''8 c''16 cis''16 cis'''8 a'8 d''8 c''4.~ | c''8 dis''4. e''8. dis''4~ dis''16 | e'''4. dis'''8 e'''2~ | e'''2~ e'''4~ e'''8. d''16 | e''4. e''16 dis''4 c''8 cis''8.~ | cis''16 gis'8 gis'2~ gis'8. d''16 dis''16 | e''4~ e''8. dis''4~ dis''16 cis''8. ais'16~ | ais'16 dis''2~ dis''4~ dis''8. | e''4~ e''16 d''16 e''8 dis''8 e'8 c''4~ | c''8 e''4 dis''8 a'8 cis''8 c''16 dis''8. | d''8 e''2~ e''4.~ | e''16 dis''2~ dis''4~ dis''8. | e''2 d''8 d''8 cis''4
    }
}

>>

\version "2.18.2"