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
        
        r2. e''8 e''8~ | e''8 b'16 cis''2~ cis''8 b'8 cis''16~ | cis''4 b'4 d''4 e''16 fis''8. | e''8 fis''4. fis''4~ fis''16 b'8 fis''16~ | fis''2. e''8. e''16~ | e''8. cis''2~ cis''16 b'8 b'8 | d''4 ais'4 cis''4~ cis''16 fis''8. | f''8. fis''2~ fis''4~ fis''16~ | fis''2 cis''8 b'8 d''8. cis''16~ | cis''8. fis''2~ fis''8 b'8.~ | b'16 e'2 a'8. c''8 b'8~ | b'2 b'2
    }
}

>>

\version "2.18.2"