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
        
        r2. e''8 d''16 e''16~ | e''16 r16 b'16 cis''4 r4. fis''8 d''16~ | d''16 r4 b16 r8. cis'16 r4 fis'8 | e'8. fis'4 r4. b'16 fis'8~ | fis'2~ fis'8 r8 e'16 r8.~ | r8 fis''16 r16 gis''8. r4. fis''16 r8 | d''16 r8. ais'8 r4~ r16 e'8 fis'8. | f'16 r8. fis'4. r8 e16 r16 dis16 d16~ | d2. r8 d'8 | cis'16 r8 fis'4 r4. b'16 r16 dis''16 | e''2 r4~ r16 c''16 b'8~ | b'2. r16 e''16 r8
    }
}

>>

\version "2.18.2"