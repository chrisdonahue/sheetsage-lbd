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
        
        r2. e''8 d''16 e''16~ | e''8 cis''4. r4 b'16 b'16 r16 d''16~ | d''16 r8. b'8 r8 d''8 r8 fis''8. e''16~ | e''16 r16 fis''4. r4 b'16 b'16 r16 fis''16~ | fis''2 r4 e''8 d''16 e''16~ | e''8 cis''8. r4~ r8. b'16 b'16 r16 d''16~ | d''16 r8. b'8 r8 d''8 r8 fis''8. e''16~ | e''16 r16 fis''4. r2~ | r4. b'8 d''8 b'8 d''8 b'16 d''16~ | d''8 fis''4~ fis''8. r8. b'16 b'16 r16 e''16~ | e''4 r4 a'4 cis''8 b'8~ | b'2 r2
    }
}

>>

\version "2.18.2"