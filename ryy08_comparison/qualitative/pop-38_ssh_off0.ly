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
        
        fis''4. fis''4. e''8 e''16 e''16~ | e''8 b'2~ b'8 b'4~ | b'4 b'4 cis''8 d''8 fis''8 fis''8 | e''8 fis''2~ fis''8 b'4~ | b'8 fis''8 fis''8 fis''4. e''8 d''16 e''16~ | e''8 b'8 cis''2 b'8 d''16 d''16~ | d''4 b'4 d''4 fis''8 fis''8 | e''8 fis''8 fis''8 fis''2~ fis''8~ | fis''4. b'8 d''8 b'8 d''8 d''16 d''16~ | d''8 fis''8 fis''8 fis''4. b'8. e''16 | e''2. cis''8 b'8~ | b'4 b'2.
    }
}

>>

\version "2.18.2"