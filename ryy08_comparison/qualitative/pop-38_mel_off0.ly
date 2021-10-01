#(set-default-paper-size "letter")

<<

\new ChordNames {
    \set majorSevenSymbol = \markup { maj7 } 
    \set additionalPitchPrefix = #"add"
    \chordmode {
        s16*192
    }
}

\new Staff { 
    {
        \clef treble
        \key b \minor
        \time 4/4
        
        r2. e''8 d''16 e''16~ | e''8 b'16 cis''2~ cis''8 fis''8 d''16~ | d''4~ d''16 b4 cis'4~ cis'16 fis'8 | e'8. fis'2~ fis'8 b'16 fis'8~ | fis'2. e'4~ | e'8 fis''8 gis''2~ gis''16 fis''8. | d''4 ais'4~ ais'8. e'8 fis'8. | f'4 fis'2 e8 dis16 d16~ | d2~ d4. d'8 | cis'8. fis'2~ fis'8 b'8 dis''16 | e''2~ e''4~ e''16 c''16 b'8~ | b'2~ b'4~ b'16 e''8.
    }
}

>>

\version "2.18.2"