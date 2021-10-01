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
        
        r2. e''8 e''8~ | e''16 r16 b'16 cis''4 r4. b'8 cis''16~ | cis''8 r8 b'8. r16 d''8 r8 e''16 fis''8. | e''16 r16 fis''4~ fis''16 r16 fis''16 r4 b'16 r16 fis''16~ | fis''2~ fis''16 r8. e''16 r8 e''16~ | e''16 r8 cis''4~ cis''16 r4 b'16 r16 b'16 r16 | d''8 r8 ais'8. r16 cis''8. r8 fis''8 r16 | f''16 r8 fis''4~ fis''8. r4.~ | r2 cis''8 b'8 d''16 r8 cis''16~ | cis''8 r16 fis''4 r4. b'8 r16~ | r16 e'4 r4 a'16 r8 c''8 b'8~ | b'2 b'16 r4~ r8.
    }
}

>>

\version "2.18.2"